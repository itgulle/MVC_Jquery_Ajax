var Application;
(function (Application) {
    var Home;
    (function (Home) {
        var HomePageApp = (function () {
            function HomePageApp(presets) {
                this.presets = presets;
                this.$buttonClickToMakeAjaxCall = $(".ajax-call-button-click");
                this.$divDisplayAjaxCallData = $(".display-ajax-call-data");
                this.init();
            }
            HomePageApp.prototype.init = function () {
                this.setActions();
            };
            HomePageApp.prototype.setActions = function () {
                var _this = this;
                this.$buttonClickToMakeAjaxCall.on("click", function () {
                    _this.getData();
                });
            };
            HomePageApp.prototype.getData = function () {
                var self = this;
                $.ajax({
                    url: this.presets.getDataUrl,
                    type: "GET",
                    contentType: "application/json",
                    success: function (result) {
                        self.$divDisplayAjaxCallData.html("Comapny Name :" + result.ComapnyName + " <br/> Comapny Address :" + result.ComapnyAddress);
                        console.log(result.ComapnyAddress);
                    }
                });
            };
            return HomePageApp;
        }());
        Home.HomePageApp = HomePageApp;
    })(Home = Application.Home || (Application.Home = {}));
})(Application || (Application = {}));
//# sourceMappingURL=HomePage.js.map