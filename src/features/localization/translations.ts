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
    'Are you married and filing a joint return?'

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
    ['Are you married and filing a joint return?']: 'Are you married and filing a joint return?'
}

export const translations: Record<SupportedLanguages, WorkflowTranslation> = {
    'en-EN': english,
}