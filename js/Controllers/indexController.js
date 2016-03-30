bamApp.controller('indexController', ["$scope", "$rootScope", "dataService", function ($scope, $rootScope, dataService) {


    var key = {};
    this.index = {
        first: true,
        delete: function(store) {
            delete this.model.applications[store.applicationDetailsModel.proposalId][parseInt(store.applicationDetailsModel.proposalVersion)];
            localStorage.setItem("oeh-bam-demo", JSONfn.stringify(this.model.applications));
            window.location.reload();
        },
        localStorage: function() {
            var data = '';

            for(var key in window.localStorage){

                if(window.localStorage.hasOwnProperty(key)){
                    data += window.localStorage[key];
                    //console.log( key + " = " + ((window.localStorage[key].length * 16)/(8 * 1024)).toFixed(2) + ' KB' );
                }

            }

            return ((data ? '\n' + 'Total space used: ' + ((data.length * 16)/(8 * 1024)).toFixed(2) + ' KB' : 'Empty (0 KB)') + (data ? ' Approx. space remaining: ' + (10048 - ((data.length * 16)/(8 * 1024)).toFixed(2)) + ' KB' : '5 MB'));
        },
        load: function(store) {

            $('#myModal').modal('hide')
                   //var store = this.model.applications[dataService.applicationDetailsModel.proposalId][parseInt(dataService.applicationDetailsModel.proposalVersion)].store;



                    dataService.indexModel =  {
                        tabControl: {
                            tab1: true,
                            tab2: false,
                            tab3: false,
                            tab4: false,
                            tab5: false,
                            tab6: false
                        }
                    };
            store.siteContextModel.refMitchellLandscape = dataService.siteContextModel.refMitchellLandscape
            store.offsetModel.referenceData = dataService.offsetModel.referenceData;
            store.vegetationModel.referenceData = dataService.offsetModel.referenceData;
            store.habitatModel.referenceData = dataService.habitatModel.referenceData;


            dataService.offsetModel = store.offsetModel;
                    dataService.siteContextModel = store.siteContextModel;
                    dataService.locationModel = store.locationModel;
                    dataService.offsetModel = store.offsetModel;
                    dataService.ibra = store.ibra;
                    dataService.vegetationModel = store.vegetationModel;
                    dataService.applicationDetailsModel = store.applicationDetailsModel;
                    dataService.habitatModel = store.habitatModel;
                    dataService.functionModel = store.functionModel;
                    dataService.structureModel = store.structureModel;
                    dataService.compositionModel = store.compositionModel;
                    var body = dataService.events.createApplicationDetailsUpdateEvent(store.applicationDetailsModel.assessmentType)
                    $rootScope.$emit(dataService.events.applicationDetailsUpdateEvent, body)

                    var body2 = dataService.events.createLocalStorageUpdate(store)
                    $rootScope.$emit(dataService.events.localStorageUpdate, body2)


        },
        saveNewRevision: function() {
            dataService.applicationDetailsModel.proposalVersion++;
            this.save();

        },
        saveNew: function() {
            var name = prompt("Enter the name of the new proposal", "Copy of " + dataService.applicationDetailsModel.proposalId)
            if (name != null) {
                dataService.applicationDetailsModel.proposalId = name;
                dataService.applicationDetailsModel.proposalVersion = 1;
                this.first = true;
                this.save();
            }

        },
        save: function() {
            var local = jQuery.extend(true, {}, dataService);
            local.offsetModel.referenceData = null;
            local.vegetationModel.referenceData = null;
            local.habitatModel.referenceData = null;
            local.siteContextModel.refMitchellLandscape = null;
            var store = {
                "offsetModel": local.offsetModel,
                //"indexModel": dataService.indexModel,
                "siteContextModel": local.siteContextModel,
                "locationModel": local.locationModel,
                "offsetModel": local.offsetModel,
                "ibra": local.ibra,
                "vegetationModel": local.vegetationModel,
                "applicationDetailsModel": local.applicationDetailsModel,
                "habitatModel": local.habitatModel,
                "functionModel": local.functionModel,
                "structureModel": local.structureModel,
                "compositionModel": local.compositionModel
            }

            if (this.first) {
                this.model.applications[dataService.applicationDetailsModel.proposalId] = {};
            }

            this.model.applications[dataService.applicationDetailsModel.proposalId][parseInt(dataService.applicationDetailsModel.proposalVersion)] = store;//= {"store": store};
            console.log(dataService.applicationDetailsModel.proposalVersion);
            console.log(local.applicationDetailsModel.proposalVersion)
            console.log(this.model.applications);

            try {
                localStorage.setItem("oeh-bam-demo", JSONfn.stringify(this.model.applications));
                this.first = false;
            } catch (e) {
                    alert('Demonstration storage exceeded! Please remove some applications.'); //data wasn't successfully saved due to quota exceed so throw an error

            }



        },
        print: function() {
            var mywindow = window.open('../views/print.html', 'my div', 'height=600,width=800');
            mywindow.onload =  function() {
                $(mywindow.document.body).append(document.body.innerHTML);
                mywindow.print();
                mywindow.close();

            }


            return true;
        },
        model: dataService.indexModel,
        showVegetationTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.id == 0 || dataService.applicationDetailsModel.assessmentType.id == 2 || dataService.applicationDetailsModel.assessmentType.id == 3)
        },

        showOffsetTab: function() {
            return (dataService.applicationDetailsModel.assessmentType || false) && (dataService.applicationDetailsModel.assessmentType.id == 1)
        },

        requestVegzoneUpdateEvent: function() {
            var body = dataService.events.createRequestVegzoneUpdateEvent()
            $rootScope.$emit(dataService.events.requestVegzoneUpdateEvent, body)
        }

    }
    var applications = JSONfn.parse(localStorage.getItem("oeh-bam-demo"));
    if (applications != null) {
        this.index.first = false;
        this.index.model.applications = applications;
    } else {

        this.index.first = true;
    }
    console.log(applications)
    this.dataService = dataService;
    dataService.indexModel.tabControl.tab1 = true;

}])