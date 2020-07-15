var english = [["John ate an apple before afternoon",
"before afternoon John ate an apple",
"John before afternoon ate an apple"],
["some students like to study in the night",
"at night some students like to study"],
["John and Mary went to church",
"Mary and John went to church"],
["John went to church after eating",
"after eating John went to church",
"John after eating went to church"],
["did he go to market",
"he did go to market"],
["the woman who called my sister sells cosmetics",
"the woman who sells cosmetics called my sister",
"my sister who sells cosmetics called the woman",
"my sister who called the woman sells cosmetics"],
["John goes to the library and studies",
"John studies and goes to the library"],
["John ate an apple so did she",
"she ate an apple so did John"],
["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],
["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her",
"yesterday I bought a book that I told her"]];

var sentenceList=["John ate an apple before afternoon","some students like to study in the night","John and Mary went to church","John went to church after eating","did he go to market",
"the woman who called my sister sells cosmetics","John goes to the library and studies","John ate an apple so did she","the teacher returned the book after she noticed the error",
"I told her that I bought a book yesterday"];

var hindi= [["राम और श्याम बाजार गयें",
"राम और श्याम गयें बाजार","बाजार गयें राम और श्याम",
"गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी",
"श्याम सोया और राम भी",
"सोया श्याम और राम भी",
"सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है",
"मैंने उसे बताया कि सो रहा है राम",
"उसे मैंने बताया कि राम सो रहा है",
"उसे मैंने बताया कि सो रहा है राम",
"मैंने बताया उसे कि राम सो रहा है",
"मैंने बताया उसे कि सो रहा है राम",
"उसे बताया मैंने कि राम सो रहा है",
"उसे बताया मैंने कि सो रहा है राम",
"बताया मैंने उसे कि राम सो रहा है",
"बताया मैंने उसे कि सो रहा है राम",
"बताया उसे मैंने कि राम सो रहा है",
"बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया",
"खाकर राम सोया",
"राम सोया खाकर",
"खाकर सोया राम",
"सोया राम खाकर",
"सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया",
"मारकर बिल्लियों को कुत्ता सो गया",
"बिल्लियों को मारकर सो गया कुत्ता",
"मारकर बिल्लियों को सो गया कुत्ता",
"कुत्ता सो गया बिल्लियों को मारकर",
"कुत्ता सो गया मारकर बिल्लियों को",
"सो गया कुत्ता बिल्लियों को मारकर",
"सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है",
"एक लाल किताब है वहाँ",
"वहाँ है एक लाल किताब",
"है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है",
"एक बड़ी सी किताब है वहाँ",
"बड़ी सी एक किताब वहाँ है",
"बड़ी सी एक किताब है वहाँ",
"वहाँ है एक बड़ी सी किताब",
"वहाँ है बड़ी सी एक किताब",
"है वहाँ एक बड़ी सी किताब",
"है वहाँ बड़ी सी एक किताब"]];

var sentenceList2=["राम और श्याम बाजार गयें","राम सोया और श्याम भी","मैंने उसे बताया कि राम सो रहा है","राम खाकर सोया",
"बिल्लियों को मारकर कुत्ता सो गया","एक लाल किताब वहाँ है","एक बड़ी सी किताब वहाँ है"];

//var refMap = new Map([1,"John ate an apple before afternoon"],[2,"some students like to study in the night"],[3,"John went to church after eating"],[4,"did he go to market"],[5,"the woman who called my sister sells cosmetics"],[6,"John goes to the library and studies"],[7,"the teacher returned the book after she noticed the error"],[8,"I told her that I bought a book yesterday"]);
var wordList = new Array();
var indexList = new Array();
var dynString = '';
var count = 0;
var ansFetch = false;
var sentence='';
var langEng = false;
var used = false;




function myFunc(){
    var stringVal = event.target.innerHTML;
    count = count+1;
    dynString = dynString+ " "+stringVal;
    document.getElementById("formedSen1").innerHTML = "Formed Sentence";
    document.getElementById("formedSen2").innerHTML = "(after Selecting words)";
    document.getElementById("dynamicString").innerHTML = dynString;
    event.target.remove();
    var distribution = dynString.split(" ");
    if(distribution.length == wordList.length+1){
        var br = document.createElement("br");
        console.log("called twice");
        document.body.appendChild(br);
        var br = document.createElement("br");
        document.body.appendChild(br);
     let butt= document.createElement("button");
     butt.innerHTML="Check the correctness of the sentence";
     document.body.appendChild(butt);
     butt.addEventListener("click",validateSentence);
    }
    if(count == 1){
     
     let butt= document.createElement("button");
     butt.innerHTML="Reform the Sentence";
     document.body.appendChild(butt);
     butt.addEventListener("click",reformSentence);
    }
   }
 
   function validate(){
     if(document.getElementById("default").value == "default")
     {
                
        alert("Select a language");
        return true;
     }

     
     document.getElementById("p1").innerHTML="Form a sentence (Declarative or Interrogative or any other type) from the given words"
     document.getElementById("p2").innerHTML=" (select the buttons in proper order)"
    return false;
     
     
   }
     
   function one(){
     clearScreenFirst();
     count = 0;
     dynString = '';
     var ansList = document.getElementsByClassName("correctAns");
     for(var i = ansList.length-1;i>=0;i--){
     document.body.removeChild(ansList[i]);}
     document.getElementById("dynamicString").innerHTML = '';
     document.getElementById("formedSen1").innerHTML = "";
    document.getElementById("formedSen2").innerHTML = "";
    if(document.getElementById("right"))document.body.removeChild(document.getElementById("right"));
    if(document.getElementById("wrong"))document.body.removeChild(document.getElementById("wrong"));
    // document.getElementById("correctAns").innerHTML = ''
      var res = validate();
      if(res == false){ 
        if(document.getElementById("default").value=="English")
        {
            langEng = true;
           sentence=randomSentSelection();
   
        }
      else  if(document.getElementById("default").value=="Hindi")
       {
          sentence=randomSentSelection2();
       }
       //var sentence = randomSentSelection();
       console.log(sentence);
       randomButtonFormation(sentence);
      }
   }
 
   function randomSentSelection(){
      /* var j =0;
      while(numList.length != 3){
       var i = Math.floor(Math.random()*sentenceList.length);
       if(numList.length != 0 && numList.includes(i)){
        continue;
        if(numList.length == 3) return;
       }
       else{
         numList.push(i);
         return sentenceList[i];
       }
     }
     return;*/
 
      var i = Math.floor(Math.random()*sentenceList.length);
      return sentenceList[i];
   }
   function randomSentSelection2(){
    var i = Math.floor(Math.random()*sentenceList2.length);
    return sentenceList2[i];
 }
 
   function randomButtonFormation(sentence){
     wordList = sentence.split(' ');
     indexList = new Array();
     while(indexList.length != wordList.length){
         var i = Math.floor(Math.random()*(wordList.length));
         if(indexList.includes(i)) continue;
         if(indexList.length != 0 && indexList.includes(i) == false){
             indexList.push(i);
            
         }
         else if(indexList.length == 0){
             indexList.push(i); 
             
         }
     }
     var paraElement = document.getElementById("dynamicString");
     for(var k = 0;k <= indexList.length-1; k++){
         let butt= document.createElement("button");
                butt.innerHTML=wordList[indexList[k]];
                //console.log('debug'+wordList[indexList[k]]);
                butt.setAttribute("style","margin-right:20px");
                document.body.insertBefore(butt,paraElement);
                butt.addEventListener("click",myFunc);
                
                
 
 
     }
   }
 
   function clearScreenFirst(){
       var btnList = document.getElementsByTagName("button");
           for(var i = btnList.length-1;i>=0;i--){
             document.body.removeChild(btnList[i]);
        
     }
   }
 
   function validateSentence(){
if(used == false){
       for(var str in english){
           for(var ind in english[str]){
        if(english[str][ind].trim() == dynString.trim()){
          let res = document.createElement("h1");
          res.setAttribute("id","right");
          res.innerHTML = "Correct Answer!";
          document.body.appendChild(res);
            return;
        }
        }
       }
       for(var str in hindi){
        for(var ind in hindi[str]){
     if(hindi[str][ind].trim() == dynString.trim()){
         let res = document.createElement("h1");
         res.setAttribute("id","right");
         res.innerHTML = "Correct Answer!";
         document.body.appendChild(res);

         return;
     }
     }
    }
    used = true;
    let res = document.createElement("h1");
    res.setAttribute("id","wrong");
    res.innerHTML = "Wrong Answer!";
    document.body.appendChild(res);
       var br = document.createElement("br");
       console.log("called twice hash");
       document.body.appendChild(br);
       var br = document.createElement("br");
       document.body.appendChild(br);
       let butt= document.createElement("button");
                butt.innerHTML="Get Correct Answer";
                butt.setAttribute("id","correctAnsKey");
                butt.addEventListener("click",getCorrectSentence);
                document.body.appendChild(butt);
                

   }}
   function reformSentence(){
     clearScreenFirst();
     count = 0;
     used = false;
     document.getElementById("dynamicString").innerHTML = '';
     document.getElementById("formedSen1").innerHTML = "";
    document.getElementById("formedSen2").innerHTML = "";
    if(document.getElementById("right"))document.body.removeChild(document.getElementById("right"));
    if(document.getElementById("wrong"))document.body.removeChild(document.getElementById("wrong"));
    var ansList = document.getElementsByClassName("correctAns");
    for(var i = ansList.length-1;i>=0;i--){
      document.body.removeChild(ansList[i]);}
    // document.getElementById("correctAns").innerHTML = ''
     dynString = '';
     var paraElement = document.getElementById("dynamicString");
     for(var k = 0;k <= indexList.length-1; k++){
         let butt= document.createElement("button");
                butt.innerHTML=wordList[indexList[k]];
                butt.setAttribute("style","margin-right:20px");
                console.log('debug'+wordList[indexList[k]]);
                document.body.insertBefore(butt,paraElement);
                butt.addEventListener("click",myFunc);
 
 
     }
   }

   function getCorrectSentence(){
     if(ansFetch == false){ansFetch = true;
      document.getElementById("correctAnsKey").innerHTML = "Hide Answer";}
     else{
      ansFetch = false;
      document.getElementById("correctAnsKey").innerHTML = "Get correct Answer";
     }
     
     for (str in sentenceList){
         console.log(sentence);
        if(sentenceList[str].trim() == sentence.trim()){

          if(langEng == true){
            for(var n in english[str]){
            let para= document.createElement("p");
                para.innerHTML=english[str][n];
                para.setAttribute("class","correctAns");
                document.body.appendChild(para);
             // document.getElementById("correctAns").innerHTML = english[str];
                        }
        }
    }
  }
    for (str in sentenceList2){
        if(sentenceList2[str].trim() == sentence.trim()){
           
          for(var n in hindi[str]){
            let para= document.createElement("p");
                para.innerHTML=hindi[str][n];
                para.setAttribute("class","correctAns");
                document.body.appendChild(para);
             // document.getElementById("correctAns").innerHTML = english[str];
                        }
                
            
          }
        }
    
        if(ansFetch == false){
          var ansList = document.getElementsByClassName("correctAns");
          for(var i = ansList.length-1;i>=0;i--){
            document.body.removeChild(ansList[i]);
       
    }
        }
     

   }