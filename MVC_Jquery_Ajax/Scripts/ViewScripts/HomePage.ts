module Application.Home {
    export class HomePageApp {
        private presets: any;
        private $buttonClickToMakeAjaxCall: JQuery;
        private $divDisplayAjaxCallData: JQuery;

        constructor(presets: any) {
            this.presets = presets;
            this.$buttonClickToMakeAjaxCall = $(".ajax-call-button-click");
            this.$divDisplayAjaxCallData = $(".display-ajax-call-data");
            this.init();
        }

        private init() {
            this.setActions();
        }
        private setActions() {
            this.$buttonClickToMakeAjaxCall.on("click",
                () => {
                    this.getData();
                });
        }
        private getData() {
            var self = this;
            $.ajax({
                url: this.presets.getDataUrl,
                type: "GET",
                contentType: "application/json",
                success(result) {
                    self.$divDisplayAjaxCallData.html(`Comapny Name :${result.ComapnyName} <br/> Comapny Address :${result.ComapnyAddress}`);
                    console.log(result.ComapnyAddress);
                }
            });
        }
    }
}