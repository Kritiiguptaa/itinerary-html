var Delhi =  ['NewDelhi']
var Maharashtra =  ['Nashik', 'Pune', 'Ratnagiri', 'Shirdi', 'Lonavala', 'Mumbai', 'Kolhapur', 'Nagpur', 'Aurangabad', 'Alibaug','Satara', 'Matheran', 'Tarkarli', 'Ajanta']
var Karnataka =  ['Bandipur', 'Gokarna', 'Coorg', 'Hampi', 'Bangalore', 'Chikmagalur', 'Shivamogga', 'Halebidu', 'Badami', 'Bijapur', 'Mysore', 'Murudeshwar', 'Mangalore', 'Bengaluru']
var Telangana =  ['Hyderabad']
var WestBengal =  ['Murshidabad', 'Kolkata', 'Purulia', 'Cooch Behar', 'Sundarbans', 'Hooghly', 'Bolpur', 'Darjeeling', 'Digha', 'Siliguri', 'Jalpaiguri']
var Goa =  ['NorthGoa','SouthGoa']
var Gujarat =  ['Bhuj', 'Dwarka', 'Gandhinagar', 'Vadodara', 'Junagadh', 'Somnath', 'Kevadia', 'Ahmedabad', 'Rann of Kutch']
var Rajasthan =  ['Jaisalmer', 'Bikaner', 'Ajmer', 'Pushkar', 'Sawai Madhopur', 'Mount Abu', 'Jaipur', 'Udaipur', 'Jodhpur', 'Chittorgarh']
var Punjab =  ['Amritsar', 'Chandigarh']
var Kerala =  ['Alappuzha', 'Kozhikode', 'Nelliyampathy', 'Thekkady', 'Kumarakom', 'Kochi', 'Varkala', 'Bekal', 'Kovalam', 'Wayanad', 'Thiruvananthapuram', 'Munnar', 'Kannur']

var MadhyaPradesh =  ['Jabalpur', 'Ujjain', 'Bhopal', 'Indore', 'Orchha', 'Chitrakoot', 'Bhimbetka', 'Kanha', 'Amarkantak', 'Mandu', 'Bandhavgarh', 'Pachmarhi', 'Khajuraho', 'Gwalior']
var HimachalPradesh =  ['Manali', 'Kinnaur', 'Barot', 'Manikaran', 'McLeod Ganj', 'Shimla', 'Mandi', 'Bir Billing', 'Kufri', 'Kullu', 'Chamba', 'Palampur', 'Shoja', 'Kangra', 'Dalhousie', 'Narkanda', 'Spiti Valley', 'dalhousie']
var Uttarakhand =  ['Mussoorie', 'Chopta', 'Joshimath', 'Ranikhet', 'Nainital', 'Haridwar', 'Rishikesh', 'Badrinath', 'Almora', 'Dehradun', 'Jim Corbett', 'Uttarkashi', 'Kedarnath', 'Auli']
var UttarPradesh =  ['Lucknow', 'Noida', 'Fatehpur Sikri', 'Aligarh', 'Jhansi', 'Agra', 'Kanpur', 'Varanasi', 'Ayodhya', 'Allahabad', 'Meerut', 'Porbandar', 'Greater Noida', 'Sarnath', 'Mathura', 'Vrindavan']
var JammuKashmir =  ['Anantnag', 'Srinagar', 'Pahalgam', 'Udhampur', 'Kishtwar', 'Jammu']
var Ladakh =  ['Kargil', 'Dras', 'Nubra Valley', 'Diskit', 'Hemis', 'Leh']
var Odisha =  ['Cuttack', 'Puri', 'Rourkela', 'Sambalpur', 'Balasore', 'Berhampur', 'Konark', 'Kendujhar', 'Bhubaneswar', 'Chilika', 'Keonjhar']
var TamilNadu =  ['Yercaud', 'Chidambaram', 'Kanyakumari', 'Madurai', 'Thanjavur', 'Rameswaram', 'Ooty', 'Tirunelveli', 'Kodaikanal', 'Mahabalipuram', 'Coimbatore', 'Chennai']
var AndhraPradesh =  ['Vijayawada', 'Vizianagaram', 'Amravati', 'Puttaparthi', 'Guntur', 'Rajahmundry', 'Kurnool', 'Kadapa', 'Anantapur', 'Srisailam', 'Visakhapatnam']
var Sikkim =  ['Ravangla', 'Gangtok', 'Pelling', 'Namchi']
var Assam =  ['Majuli', 'Kaziranga', 'Guwahati', 'Sivasagar', 'Hajo', 'Manas']
var ArunachalPradesh =  ['Tawang']
var Tripura =  ['Agartala', 'Dumboor', 'Unakoti']
var Chhattisgarh =  ['Bastar']
var Nagaland =  ['DzÃ¼kou Valley']
var Puducherry =  ['Puducherry', 'Auroville']
var AndamanNicobar =  ['Havelock Island', 'Baratang Island', 'Neil Island', 'Port Blair']
var DamanDiu =  ['Diu']
var Jharkhand =  ['Ranchi', 'Deoghar']
var Bihar =  ['Patna', 'Bodh Gaya']
var Haryana =  ['Gurugram']
var Meghalaya =  ['Cherrapunji']


$("#inputState").change(function(){
  var StateSelected = $(this).val();
  var optionsList;
  var htmlString = "";

  switch (StateSelected) {
    case "AndhraPradesh":
        optionsList = AndhraPradesh;
        break;
    case "Arunachal Pradesh":
        optionsList = ArunachalPradesh;
        break;
    case "Assam":
        optionsList = Assam;
        break;
    case "Bihar":
        optionsList = Bihar;
        break;
    case "Chhattisgarh":
        optionsList = Chhattisgarh;
        break;
    case "Goa":
        optionsList = Goa;
        break;
    case  "Gujarat":
        optionsList = Gujarat;
        break;
    case "Haryana":
        optionsList = Haryana;
        break;
    case "Himachal Pradesh":
        optionsList = HimachalPradesh;
        break;
    case "Jammu and Kashmir":
        optionsList = JammuKashmir;
        break;
    case "Jharkhand":
        optionsList = Jharkhand;
        break;
    case  "Karnataka":
        optionsList = Karnataka;
        break;
    case "Kerala":
        optionsList = Kerala;
        break;
    case  "Madya Pradesh":
        optionsList = MadhyaPradesh;
        break;
    case "Maharashtra":
        optionsList = Maharashtra;
        break;
    case  "Manipur":
        optionsList = Manipur;
        break;
    case "Meghalaya":
        optionsList = Meghalaya ;
        break;
    case  "Mizoram":
        optionsList = Mizoram;
        break;
    case "Nagaland":
        optionsList = Nagaland;
        break;
    case  "Odisha":
        optionsList = Odisha;
        break;
    case "Punjab":
        optionsList = Punjab;
        break;
    case  "Rajasthan":
        optionsList = Rajasthan;
        break;
    case "Sikkim":
        optionsList = Sikkim;
        break;
    case  "Tamil Nadu":
        optionsList = TamilNadu;
        break;
    case  "Telangana":
        optionsList = Telangana;
        break;
    case "Tripura":
        optionsList = Tripura ;
        break;
    case  "Uttaranchal":
        optionsList = Uttaranchal;
        break;
    case  "Uttar Pradesh":
        optionsList = UttarPradesh;
        break;
    case "West Bengal":
        optionsList = WestBengal;
        break;
    case  "Andaman and Nicobar Islands":
        optionsList = AndamanNicobar;
        break;
    case "Chandigarh":
        optionsList = Chandigarh;
        break;
    case  "Dadar and Nagar Haveli":
        optionsList = DadraHaveli;
        break;
    case "Daman and Diu":
        optionsList = DamanDiu;
        break;
    case  "Delhi":
        optionsList = Delhi;
        break;
    case "Lakshadeep":
        optionsList = Lakshadeep ;
        break;
    case  "Pondicherry":
        optionsList = Pondicherry;
        break;
}


  for(var i = 0; i < optionsList.length; i++){
    htmlString = htmlString+"<option value='"+ optionsList[i] +"'>"+ optionsList[i] +"</option>";
  }
  $("#inputDistrict").html(htmlString);

});
