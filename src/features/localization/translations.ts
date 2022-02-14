export type SupportedLanguages =
    'en-EN'

export type WorkflowPrompts =
    'It pays to file' |
    'This tax season, there are more reasons to file' |
    'Some of the rules are confusing' |
    'This tool is for informational purposes' |
    'Proceed' |
    'Yes' |
    'No' |
    'Children Step' |
    'Do you have children'

type WorkflowTranslation = Record<WorkflowPrompts, string>

const english: WorkflowTranslation = {
    ['It pays to file']: 'It pays to file',
    ['This tax season, there are more reasons to file']: 'This tax season, there are more reasons to file than ever before. Even if you aren\'t required to file a federal income tax return, filing can get you refundable credits that will put money in your pocket.',
    ['Some of the rules are confusing']: 'However, some of the rules are confusing, with different eligibility based on age, whether you were a full-time student, and whether you have experience in foster care or with homelessness.  This tool is designed to help young adults understand what credits they may be eligible for.',
    ['This tool is for informational purposes']: 'This tool is for informational purposes. It does not cover all possible circumstances and is not intended as legal advice. We will not store any of your data and will not file a return for you.',
    ['Proceed']: 'Proceed',
    ['Yes']: 'Yes',
    ['No']: 'No',
    ['Children Step']: 'Dependent Children',
    ['Do you have children']: 'Do you have children who live with you and you pay for their expenses?'
}

export const translations: Record<SupportedLanguages, WorkflowTranslation> = {
    'en-EN': english,
}