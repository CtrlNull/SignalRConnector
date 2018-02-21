using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace SignalRDesktop.Hubs
{
    [HubName("ConnectorHub")]
    public class Chat : Hub
    {
        public void SendMessage(string username, string message)
        {
            Clients.All.recieveMessage(username, message);
        }
    }
}
// Dump Code
//public void HelloSignalR()
//{
//    this.Clients.Group("name");
//}

//public void JoinRoom(string name)
//{
//    this.Groups.Add(this.Context.ConnectionId, name);
//}

//public void LeaveRoom(string name)
//{
//    this.Groups.Remove(this.Context.ConnectionId, name);
//}
