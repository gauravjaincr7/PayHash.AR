using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class button3d : MonoBehaviour
{
    public void buttonFunction(string btnLink)
    {
        Application.OpenURL(btnLink);
    }    
}