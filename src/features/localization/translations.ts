export type SupportedLanguages =
    'en-EN'

export type WorkflowPrompts =
    'In Development' |
    'It pays to file' |
    'This tax season, there are more reasons to file' |
    'Some of the rules are confusing' |
    'This tool is for informational purposes' |
    'Proceed' |
    'Yes' |
    'No' |
    'Results' |
    'Children Step' |
    'Do you have children' |
    'You may qualify for the Earned Income Tax Credit for parents' |
    'Go to' |
    'GetYourRefund' |
    'for information on how to file' |
    'Filing Joint Step' |
    'Use this tool to figure out whether you are likely' |
    'Are you married and filing a joint return?' |
    'SSN Step' |
    'Do you have a social security number that authorizes you to work?' |
    'Do both you and your spouse have a social security number that authorizes you to work?' |
    'If you do not have a SSN' |
    'Earned Income Step' |
    'What was your and your spouse\'s combined earned income in 2021?' |
    'What was your earned income in 2021?' |
    'Earned income includes' |
    'None' |
    'At least $1 up to $27,380' |
    'More than $27,380' |
    'At least $1 up to $21,430' |
    'More than $21,430' |
    'You are not eligible for the EITC.  However, you are legally required to file a federal tax return' |
    'Prior Earned Income Step' |
    'What was your and your spouse\'s combined earned income in 2019?' |
    'What was your earned income in 2019?' |
    'If you earned more in 2019 than in 2021' |
    'You are not eligible for the EITC because you did not have earned income in either 2021 or 2019' |
    'You are not eligible for the EITC based on your 2019 income' |
    'DOB Step' |
    'When were you born?' |
    'January 2, 2004 or later' |
    'After Jan 2 2003 and before Jan 2, 2004' |
    'After Jan 1, 1998 and before Jan 1, 2003' |
    'Jan 1, 1998 or earlier' |
    'You are not eligible for the EITC for workers without qualifying children because of your age' |
    'Student Step' |
    'Were you a full time student for at least 5 months of 2021?' |
    'Foster Care Step' |
    'Were you in formal foster care at any time between the ages of 14-17 years old?'

type WorkflowTranslation = Record<WorkflowPrompts, string>

const english: WorkflowTranslation = {
    ['In Development']: 'In Development',
    ['It pays to file']: 'It pays to file',
    ['This tax season, there are more reasons to file']: 'This tax season, there are more reasons to file than ever before. Even if you aren\'t required to file a federal income tax return, filing can get you refundable credits that will put money in your pocket.',
    ['Some of the rules are confusing']: 'However, some of the rules are confusing, with different eligibility based on age, whether you were a full-time student, and whether you have experience in foster care or with homelessness.  This tool is designed to help young adults understand what credits they may be eligible for.',
    ['This tool is for informational purposes']: 'This tool is for informational purposes. It does not cover all possible circumstances and is not intended as legal advice. We will not store any of your data and will not file a return for you.',
    ['Proceed']: 'Proceed',
    ['Yes']: 'Yes',
    ['No']: 'No',
    ['Results']: 'Results',
    ['Children Step']: 'Dependent Children',
    ['Do you have children']: 'Do you have children who live with you and you pay for their expenses?',
    ['You may qualify for the Earned Income Tax Credit for parents']: 'You may qualify for the Earned Income Tax Credit for parents with qualifying children, and the Child Tax Credit.  You should file a tax return for 2021 to claim the credits you are eligible for.',
    ['Go to']: 'Go to',
    ['GetYourRefund']: 'GetYourRefund',
    ['for information on how to file']: 'for information on how to file.',
    ['Filing Joint Step']: 'Married Filing Joint',
    ['Use this tool to figure out whether you are likely']: 'Use this tool to figure out whether you are likely to qualify for the Earned Income Tax Credit (EITC) for workers without qualifying children.  This credit was expanded in 2021, so you may qualify even if you have never received it before.',
    ['Are you married and filing a joint return?']: 'Are you married and filing a joint return?',
    ['SSN Step']: 'Social Security Number',
    ['Do you have a social security number that authorizes you to work?']: 'Do you have a social security number that authorizes you to work?',
    ['Do both you and your spouse have a social security number that authorizes you to work?']: 'Do both you and your spouse have a social security number that authorizes you to work?',
    ['If you do not have a SSN']: 'If you do not have a SSN, you cannot claim the federal EITC, although some states  (Maryland, New Mexico, Oregon, Washington, Colorado, and California) allow taxpayers with ITINs to claim their state EITCs.',
    ['Earned Income Step']: 'Earned Income',
    ['What was your and your spouse\'s combined earned income in 2021?']: 'What was your and your spouse\'s combined earned income in 2021?',
    ['What was your earned income in 2021?']: 'What was your earned income in 2021?',
    ['Earned income includes']: 'Earned income includes income earned as wages, as a contractor, or on a cash basis.  It does not include unemployment insurance or stimulus payments. It does not include scholarship or fellowship grants unless they were reported on a W-2 form.',
    ['None']: 'None',
    ['At least $1 up to $27,380']: 'At least $1 up to $27,380',
    ['More than $27,380']: 'More than $27,380',
    ['At least $1 up to $21,430']: 'At least $1 up to $21,430',
    ['More than $21,430']: 'More than $21,430',
    ['You are not eligible for the EITC.  However, you are legally required to file a federal tax return']: 'You are not eligible for the EITC.  However, you are legally required to file a federal tax return.',
    ['Prior Earned Income Step']: 'Prior Year Earned Income',
    ['What was your and your spouse\'s combined earned income in 2019?']: 'What was your and your spouse\'s combined earned income in 2019?',
    ['What was your earned income in 2019?']: 'What was your earned income in 2019?',
    ['If you earned more in 2019 than in 2021']: 'If you earned more in 2019 than in 2021',
    ['You are not eligible for the EITC because you did not have earned income in either 2021 or 2019']: 'You are not eligible for the EITC because you did not have earned income in either 2021 or 2019.   You may still want to file a 2021 return if you were eligible for the third stimulus payment and did not receive it.',
    ['You are not eligible for the EITC based on your 2019 income']: 'You are not eligible for the EITC based on your 2019 income.   You may still want to file a 2021 return if you were eligible for the third stimulus payment and did not receive it.',
    ['DOB Step']: 'Date of Birth',
    ['When were you born?']: 'When were you born?',
    ['January 2, 2004 or later']: 'January 2, 2004 or later',
    ['After Jan 2 2003 and before Jan 2, 2004']: 'After Jan 2 2003 and before Jan 2, 2004',
    ['After Jan 1, 1998 and before Jan 1, 2003']: 'After Jan 1, 1998 and before Jan 1, 2003',
    ['Jan 1, 1998 or earlier']: 'Jan 1, 1998 or earlier',
    ['You are not eligible for the EITC for workers without qualifying children because of your age']: 'You are not eligible for the EITC for workers without qualifying children because of your age.  You may still want to file a return if you had any taxes withheld from a paycheck in 2021.',
    ['Student Step']: 'Student Status',
    ['Were you a full time student for at least 5 months of 2021?']: 'Were you a full time student for at least 5 months of 2021?',
    ['Foster Care Step']: 'Foster Care Status',
    ['Were you in formal foster care at any time between the ages of 14-17 years old?']: 'Were you in formal foster care at any time between the ages of 14-17 years old?',
}

export const translations: Record<SupportedLanguages, WorkflowTranslation> = {
    'en-EN': english,
}