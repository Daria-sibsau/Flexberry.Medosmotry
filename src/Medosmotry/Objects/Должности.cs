﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Medosmotry
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Должности.
    /// </summary>
    // *** Start programmer edit section *** (Должности CustomAttributes)

    // *** End programmer edit section *** (Должности CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностиE", new string[] {
            "IDДолжности as \'ID должности\'",
            "Наименование as \'Наименование\'"})]
    [View("ДолжностиL", new string[] {
            "IDДолжности as \'I d должности\'",
            "Наименование as \'Наименование\'"})]
    public class Должности : ICSSoft.STORMNET.DataObject
    {
        
        private int fIDДолжности;
        
        private string fНаименование;
        
        // *** Start programmer edit section *** (Должности CustomMembers)

        // *** End programmer edit section *** (Должности CustomMembers)

        
        /// <summary>
        /// IDДолжности.
        /// </summary>
        // *** Start programmer edit section *** (Должности.IDДолжности CustomAttributes)

        // *** End programmer edit section *** (Должности.IDДолжности CustomAttributes)
        public virtual int IDДолжности
        {
            get
            {
                // *** Start programmer edit section *** (Должности.IDДолжности Get start)

                // *** End programmer edit section *** (Должности.IDДолжности Get start)
                int result = this.fIDДолжности;
                // *** Start programmer edit section *** (Должности.IDДолжности Get end)

                // *** End programmer edit section *** (Должности.IDДолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.IDДолжности Set start)

                // *** End programmer edit section *** (Должности.IDДолжности Set start)
                this.fIDДолжности = value;
                // *** Start programmer edit section *** (Должности.IDДолжности Set end)

                // *** End programmer edit section *** (Должности.IDДолжности Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Должности.Наименование CustomAttributes)

        // *** End programmer edit section *** (Должности.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Должности.Наименование Get start)

                // *** End programmer edit section *** (Должности.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Должности.Наименование Get end)

                // *** End programmer edit section *** (Должности.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должности.Наименование Set start)

                // *** End programmer edit section *** (Должности.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Должности.Наименование Set end)

                // *** End programmer edit section *** (Должности.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиE", typeof(IIS.Medosmotry.Должности));
                }
            }
            
            /// <summary>
            /// "ДолжностиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностиL", typeof(IIS.Medosmotry.Должности));
                }
            }
        }
    }
}
