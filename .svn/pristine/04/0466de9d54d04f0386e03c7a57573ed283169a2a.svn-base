import { format } from 'date-fns';

export default class DateUtils {


    getPreviousYYYY(){
        const currentDate=new Date();
        currentDate.setFullYear(currentDate.getFullYear()-1);
        return currentDate.getFullYear();
    }
    getPreviousYY(){
        const currentDate=new Date();
        currentDate.setFullYear(currentDate.getFullYear()-1);
        return currentDate.getFullYear()%100;
    }

    increaseDate(days:number){
        const currDate = new Date();
         currDate.setDate(currDate.getDate()+days);
         return currDate;
    }

    increaseDateWithFormat(days:number,formats:string){
        const currDate = new Date();
        const formattedDate:string = format(currDate.setDate(currDate.getDate()+days),formats);
        return formattedDate;
    }

    decreaseDateWithFormat(days:number,formats:string){
        const currDate = new Date();
        const formattedDate:string = format(currDate.setDate(currDate.getDate()-days),formats);
        return formattedDate;
    }

    decreaseDate(days:number){
        const currDate = new Date();
         currDate.setDate(currDate.getDate()-days);
         return currDate;
    }

    getSystemDateFormat(formatString:string){
        const currDate = new Date();
        const formattedDate:string = format(currDate,formatString);
        return formattedDate;
    }

    convertStringToDate(formatString:string){
        let convertedDate: Date = new Date(Date.parse(formatString));
        return convertedDate;
    }
    
    convertStringToDateWithFormat(dateString:string,formatString:string){
        let convertedDate: Date = new Date(Date.parse(dateString));
        return format(convertedDate,formatString);
    }

    getSystemDate(format:string){ 
        let formatter:Intl.DateTimeFormat
        if(format === "dd/MM/yy"){
            formatter=new Intl.DateTimeFormat("en-GB",{
                day:"2-digit",
                month:"2-digit",
                year:"2-digit",
            }); 
        }
            
            if(format==="dd/MM/yyyy")
            {
                formatter=new Intl.DateTimeFormat("en-GB",{
                    day:"2-digit",
                    month:"2-digit",
                    year:"numeric",
                }); 

            }              
        const currentDate=new Date();
        const formattedDate=formatter.format(currentDate);
        return formattedDate;
    }

    getCurrentDateAndTime(zone:string,halfCycleTimeFormat:boolean)
    {
        const options: Intl.DateTimeFormatOptions = {
            timeZone: zone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12:halfCycleTimeFormat,
        };   
        const formattedDateAndTime = new Date().toLocaleString('en-GB', options);
        return formattedDateAndTime;
    }

    async getCurrentDay(){
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const currDate = new Date();
        let day = days[currDate.getDay()];
        return day;
    }

    async getDayNumber(){
        const currDate = new Date();
        let day = currDate.getDay();
        return day;
    }

    async getDate(){
        const currDate = new Date();
        let date = currDate.getDate();
        return date;
    }
}


