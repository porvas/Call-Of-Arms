using UnityEngine;
using System.Collections;
using System.Collections.Generic;


public class GameSettings : MonoBehaviour
{

    public static void Clear()
    {
        serverTitle = description = motd = IP = password = "";
        isDedicatedServer = false;
    }


    //MP server specific
    public static string serverTitle;
    public static string description;
    public static string motd;
    public static string password;
    public static string IP;
    public static int port;
    public static int players;
	public static int hostLevel;
	public static int hostDuration;
	public static int playMode;
    public static bool isDedicatedServer;

}
