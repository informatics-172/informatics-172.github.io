var json = {
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "radiogroup",
        name: "genderQuestion",
        title: "Gender",
        isRequired: true,
        choices: [
         {
          value: "m",
          text: "Male"
         },
         {
          value: "f",
          text: "Female"
         }
        ],
        colCount: 2
       }
      ]
     },
     {
      name: "page2",
      elements: [
       {
        type: "matrix",
        name: "question2",
        startWithNewLine: false,
        title: "Family History of Substance Abuse Pt. 1",
        columns: [
         {
          value: "yes",
          text: "Yes"
         },
         {
          value: "no",
          text: "No"
         }
        ],
        rows: [
         {
          value: "3",
          text: "Alcohol",
          visibleIf: "{genderQuestion} = \"m\""
         },
         {
          value: "1",
          text: "Alcohol",
          visibleIf: "{genderQuestion} = \"f\""
         }
        ],
        isAllRowRequired: true
       },
       {
        type: "matrix",
        name: "question1",
        title: "Family History of Substance Abuse Pt. 2",
        columns: [
         {
          value: "yes",
          text: "Yes"
         },
         {
          value: "no",
          text: "No"
         }
        ],
        rows: [
         {
          value: "3",
          text: "Illegal Drugs",
          visibleIf: "{genderQuestion} = \"m\""
         },
         {
          value: "2",
          text: "Illegal Drugs",
          visibleIf: "{genderQuestion} = \"f\""
         },
         {
          value: "4",
          text: "Rx Drugs"
         }
        ],
        isAllRowRequired: true
       }
      ]
     },
     {
      name: "page3",
      elements: [
       {
        type: "matrix",
        name: "question3",
        title: "Personal History of Substance Abuse",
        columns: [
         {
          value: "yes",
          text: "Yes"
         },
         {
          value: "no",
          text: "No"
         }
        ],
        rows: [
         {
          value: "3",
          text: "Alcohol"
         },
         {
          value: "4",
          text: "Illegal Drugs"
         },
         {
          value: "5",
          text: "Rx Drugs"
         }
        ],
        isAllRowRequired: true
       }
      ]
     },
     {
      name: "page4",
      elements: [
       {
        type: "matrix",
        name: "question4",
        title: "Other Contributing Factors",
        columns: [
         {
          value: "yes",
          text: "Yes"
         },
         {
          value: "no",
          text: "No"
         }
        ],
        rows: [
         {
          value: "1",
          text: "Age Between 16-45"
         },
         {
          value: "0",
          text: "History of Preadolescent Sexual Abuse",
          visibleIf: "{genderQuestion} = \"m\""
         },
         {
          value: "3",
          text: "History of Preadolescent Sexual Abuse",
          visibleIf: "{genderQuestion} = \"f\""
         }
        ],
        isAllRowRequired: true
       }
      ]
     },
     {
      name: "page5",
      elements: [
       {
        type: "matrix",
        name: "question5",
        title: "Psychological Disease",
        columns: [
         {
          value: "yes",
          text: "Yes"
         },
         {
          value: "no",
          text: "No"
         }
        ],
        rows: [
         {
          value: "2",
          text: "ADD, OCD, Bipolar, Schizophrenia"
         },
         {
          value: "1",
          text: "Depression"
         }
        ],
        isAllRowRequired: true
       }
      ]
     }
    ],
    maxTimeToFinish: -31
   }


window.survey = new Survey.Model(json);

$("#surveyElement").SurveyWindow({model: survey, isExpanded: true, onComplete: sendDataToServer});

function sendDataToServer(survey) {
    alert("The results are: " + JSON.stringify(survey.data) + " Add the scores you've answered \"yes\" to. A score of 3 or lower indicates low risk for future opioid abuse, a score of 4 to 7 indicates moderate risk for opioid abuse, and a score of 8 or higher indicates a high risk for opioid abuse.\n\n-Questionnaire developed by Lynn R. Webster, MD to asses risk of opioid addiction.");
}