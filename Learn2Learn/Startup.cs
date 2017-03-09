using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Learn2Learn.Startup))]
namespace Learn2Learn
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
