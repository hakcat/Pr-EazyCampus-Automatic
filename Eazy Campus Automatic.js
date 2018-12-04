//TKMCE Eazy Campus Automatic Staff Evaluation Excellent Marker
//Login to Eazy Campus, Click Staff Evaluation link and click any teacher name
// Open inspect element in your browser by pressing ctrl+Shift+(I or J)
// Click console
//Put this code and hit enter

word1='ctl00_ContentPlaceHolder1_gvQuestionsList_ctl0' 
word2='_rbtn_Choice_'
for(var i=2;i<=9;i++)
document.getElementById(word1+(i)+word2+(i-1)+'_0').click()
word1='ctl00_ContentPlaceHolder1_gvQuestionsList_ctl1'
for(i=0;i<=2;i++)
document.getElementById(word1+(i)+word2+(i+9)+'_0').click()
document.getElementById('ctl00_ContentPlaceHolder1_btnSave').click()

// Change the element ctl00_ContentPlaceHolder1_gvQuestionsList_ctl12_rbtn_Choice_11_0 if you want to customize
//Row elements start with ct102 and column starts with 0(0=Excellent 1=Good and so on)
// Although boring, please use the staff evaluation option to say something about the teacher, if you cannot face him/her directly.
