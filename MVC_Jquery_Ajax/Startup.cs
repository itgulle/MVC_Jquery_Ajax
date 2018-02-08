using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC_Jquery_Ajax.Startup))]
namespace MVC_Jquery_Ajax
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
