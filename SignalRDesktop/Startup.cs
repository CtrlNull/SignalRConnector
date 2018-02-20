using Owin;
using Microsoft.Owin;
    [assembly: OwinStartup(typeof(SignalRDesktop.Startup))]

namespace SignalRDesktop
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}