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
    'Children can include' |
    'For more details, see' |
    'this IRS website'|
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
    'What is earned income?' |
    'Earned income includes' |
    'None' |
    'At least $1 up to $27,380' |
    'More than $27,380' |
    'At least $1 up to $4,300' |
    'At least $4,301 up to $21,430' |
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
    'Were you in formal foster care at any time between the ages of 14-17 years old?' |
    'Homeless Step' |
    'In 2021, were you an unaccompanied homeless youth' |
    'I\'m not sure, tell me more' |
    'You are considered to be an' |
    'unaccompanied homeless youth' |
    'if you are not in the physical custody of a parent' |
    'You are considered to be' |
    'self-supporting and at risk of homelessness' |
    'if you pay for your own living expenses' |
    'For more information see' |
    'https://schoolhouseconnection.org/am-i-experiencing-homelessness' |
    'You are not eligible for the EITC for workers without qualifying children, because of your age and student status' |
    'Residency Step' |
    'In 2021, did you live in the United States for more than half of the year?' |
    'You are not eligible for the EITC because you did not live in the US' |
    'Disability Step' |
    'Were you "permanently and totally disabled" in 2021?' |
    'Living Situation Step' |
    'Did you live at least half the year with another taxpayer?' |
    'Family Step' |
    'Are you their child' |
    'Relative Age Step' |
    'Are you younger than them (or their spouse, if they file jointly)?' |
    'You do not qualify for the Earned Income Tax Credit because you are the qualifying child' |
    'Living Expenses Step' |
    'Did another person provide more than half of your living expenses' |
    'This is calculated by adding' |
    'here' |
    'You likely qualify for a credit' |
    'If you\'re using the 1040 form' |
    'Cohabitation Step' |
    'Did you live with this person all year?' |
    'You can likely be claimed as the dependent of another taxpayer' |
    'Extended Family Step' |
    'Were you related to them as' |
    'Their child' |
    'Their brother' |
    'Their father' |
    'Their stepfather' |
    'A son or daughter of their brother or sister' |
    'A son or daughter of their half brother or half sister' |
    'A brother or sister of their father or mother' |
    'Their son-in-law' |
    'Make sure to enter your 2019 earned income in line 27c' |
    'For more information about tax credits for youth, check out' |
    'this resource' |
    'from John Burton Advocates for Youth!' |
    'More' |
    'frequently asked questions are answered here.'

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
    ['Do you have children']: 'Do you have children who live with you for more than half the year?',
    ['Children can include']: 'Children can include step-children, adopted or foster children, grandchildren,younger siblings and nieces and nephews. Children must be under 19 (24 if full-time students) or permanently and totally disabled. Children who were born during the year can count if they lived with you at least half the time they were alive.  Children must have a valid social security number and can only be claimed by one person in a given year.',
    ['For more details, see']: 'For more details, see',
    ['this IRS website']: 'this IRS website',
    ['You may qualify for the Earned Income Tax Credit for parents']: 'You may qualify for the Earned Income Tax Credit for parents with qualifying children, and the Child Tax Credit.  You should file a tax return for 2021 to claim the credits you are eligible for.  Note: even if you received advance payments of the Child Tax Credit in 2021, you still need to file to claim the rest of the money that you are owed.',
    ['Go to']: 'Go to',
    ['GetYourRefund']: 'GetYourRefund.org',
    ['for information on how to file']: 'for help filing your return.',
    ['Filing Joint Step']: 'Married Filing Joint',
    ['Use this tool to figure out whether you are likely']: 'Use this tool to figure out whether you are likely to qualify for the Earned Income Tax Credit (EITC) for workers without qualifying children.  This credit was expanded in 2021, so you may qualify even if you have never received it before.',
    ['Are you married and filing a joint return?']: 'Are you married and filing a joint return with your spouse?',
    ['SSN Step']: 'Social Security Number',
    ['Do you have a social security number that authorizes you to work?']: 'Do you have a social security number that authorizes you to work?',
    ['Do both you and your spouse have a social security number that authorizes you to work?']: 'Do both you and your spouse have a social security number that authorizes you to work?',
    ['If you do not have a SSN']: 'If you do not have a Social Secutiry Number, you cannot claim the federal EITC, although some states  (Maryland, New Mexico, Oregon, Washington, Colorado, and California) allow taxpayers with Individual Taxpayer Identification Numbers (ITINs) to claim their state EITCs.',
    ['Earned Income Step']: 'Earned Income',
    ['What was your and your spouse\'s combined earned income in 2021?']: 'What was your and your spouse\'s combined earned income in 2021?',
    ['What was your earned income in 2021?']: 'What was your earned income in 2021?',
    ['What is earned income?']: 'What counts as earned income?',
    ['Earned income includes']: 'Earned income includes income earned as wages, through self-employment or sales, as a contractor, through a “gig” job or side hustle, or on a cash basis.  It does not include unemployment insurance or stimulus payments. It does not include scholarship or fellowship grants unless they were reported on a W-2 form.',
    ['None']: 'None',
    ['At least $1 up to $27,380']: 'At least $1 up to $27,380',
    ['More than $27,380']: 'More than $27,380',
    ['At least $1 up to $4,300']: 'At least $1 up to $4,300',
    ['At least $4,301 up to $21,430']: 'At least $4,301 up to $21,430',
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
    ['Were you a full time student for at least 5 months of 2021?']: 'Were you a student (half-time or more) for at least 5 months of 2021?',
    ['Foster Care Step']: 'Foster Care Status',
    ['Were you in formal foster care at any time between the ages of 14-17 years old?']: 'Were you in formal foster care at any time between the ages of 14-17 years old? Formal foster care can include care by a relative, as long as a child welfare agency was involved with your placement. You do not need documentation to prove your status as a former foster youth.',
    ['Homeless Step']: 'Homeless/Unaccompanied Status',
    ['In 2021, were you an unaccompanied homeless youth']: ' In 2021, were you an unaccompanied homeless youth (experiencing homelessness without a parent or guardian), or a youth who was self-supporting and at risk of homelessness?',
    ['I\'m not sure, tell me more']: 'I\'m not sure, tell me more',
    ['You are considered to be an']: 'You are considered to be an',
    ['unaccompanied homeless youth']: 'unaccompanied homeless youth',
    ['if you are not in the physical custody of a parent']: 'if you are not in the physical custody of a parent or guardian and you stayed at shelters, campgrounds, cars, in motels, or temporarily with other people (“couch surfing”).',
    ['You are considered to be']: 'You are considered to be',
    ['self-supporting and at risk of homelessness']: 'self-supporting and at risk of homelessness',
    ['if you pay for your own living expenses']: 'if you pay for your own living expenses, including housing, and may face a loss of housing or have no other stable housing arrangement.',
    ['For more information see']: 'For more information see',
    ['https://schoolhouseconnection.org/am-i-experiencing-homelessness']: 'https://schoolhouseconnection.org/am-i-experiencing-homelessness',
    ['You are not eligible for the EITC for workers without qualifying children, because of your age and student status']: 'You are not eligible for the EITC for workers without qualifying children, because of your age and student status.  Another person may be able to claim you as their qualifying child. You may still want to file a return if you had any taxes withheld from a paycheck in 2021 or to claim the third stimulus payment if you did not receive it already and cannot be claimed by someone else as a dependent in 2021.',
    ['Residency Step']: 'Residency',
    ['In 2021, did you live in the United States for more than half of the year?']: 'In 2021, did you live in the United States for more than half of the year?',
    ['You are not eligible for the EITC because you did not live in the US']: 'You are not eligible for the EITC because you did not live in the US for more than half the year. You may still need to file a tax return.',
    ['Disability Step']: 'Disability',
    ['Were you "permanently and totally disabled" in 2021?']: 'Were you "permanently and totally disabled" in 2021?',
    ['Living Situation Step']: 'Living Situation',
    ['Did you live at least half the year with another taxpayer?']: 'Did you live at least half the year with another taxpayer?',
    ['Family Step']: 'Family Connection',
    ['Are you their child']: 'Are you their child, stepchild, foster child or a descendent of any of them (e.g. grandchild, great-grandchild)?  Or their sibling (brother or sister), half-sibling, step-sibling, or a descendant of any of them (e.g. niece or nephew, great-niece or great-nephew)?',
    ['Relative Age Step']: 'Relative Age',
    ['Are you younger than them (or their spouse, if they file jointly)?']: 'Are you younger than them (or their spouse, if they file jointly)?',
    ['You do not qualify for the Earned Income Tax Credit because you are the qualifying child']: 'It appears you do not qualify for the Earned Income Tax Credit because you are the qualifying child of another taxpayer. You may still want to file a return if you had any taxes withheld from a paycheck in 2021 or to claim other credits.',
    ['Living Expenses Step']: 'Living Expenses',
    ['Did another person provide more than half of your living expenses']: 'Did another person (or person and their spouse) provide more than half of your living expenses for 2021? (Note: Foster care payments are considered support provided by the agency, not by the foster parent).',
    ['This is calculated by adding']: 'This is calculated by adding up the all the costs of living (food, housing, clothing, health care, education, etc.) and determining who has paid them. Note: Foster care payments are considered support provided by the agency, not by the foster parent.  The IRS has a worksheet for helping you make this calculation',
    ['here']: 'here',
    ['You likely qualify for a credit']: 'You likely qualify for the earned income tax credit (EITC or EIC), which can be worth up to $1502.  When preparing your taxes, be sure to say that you wish to claim this credit.',
    ['If you\'re using the 1040 form']: ' When you fill our your tax form, be sure to check the box on line 27a  that certifies that “you were born after 1/1/1998, and before 1/2/2004, and you satisfy all the other requirements for taxpayers who are at least age 18, to claim the EIC.”   If you are using tax preparation software, you may not see this box, but make sure to answer this question.',
    ['Cohabitation Step']: 'Cohabitation',
    ['Did you live with this person all year?']: 'Did you live with this person all year? Other than absences due to illness, education, business, vacation, military service, or detention in a juvenile facility.',
    ['You can likely be claimed as the dependent of another taxpayer']: 'It appears that you do not qualify for the Earned Income Tax Credit because you can be claimed as a dependent by another person. You may still want to file a return if you had any taxes withheld from a paycheck in 2021 or to claim other credits.',
    ['Extended Family Step']: 'Extended Family',
    ['Were you related to them as']: 'Were you related to them as:',
    ['Their child']: 'their child, stepchild, foster child, or a descendant of any of them (for example, their grandchild). (A legally adopted child is considered your child.)',
    ['Their brother']: 'Their brother, sister, half brother, half sister, stepbrother, or stepsister.',
    ['Their father']: 'Their father, mother, grandparent, or other direct ancestor, but not foster parent.',
    ['Their stepfather']: 'Their stepfather or stepmother.',
    ['A son or daughter of their brother or sister']: 'A son or daughter of their brother or sister.',
    ['A son or daughter of their half brother or half sister']: 'A son or daughter of their half brother or half sister.',
    ['A brother or sister of their father or mother']: 'A brother or sister of their father or mother.',
    ['Their son-in-law']: 'Their son-in-law, daughter-in-law, father-in-law, mother-in-law, brother-in-law, or sister-in-law.',
    ['Make sure to enter your 2019 earned income in line 27c']: 'Make sure to enter your 2019 earned income in line 27c.',
    ['For more information about tax credits for youth, check out']: 'For more information about tax credits for youth, check out',
    ['this resource']: 'this resource',
    ['from John Burton Advocates for Youth!']: 'from John Burton Advocates for Youth!',
    ['More']: 'More',
    ['frequently asked questions are answered here.']: 'frequently asked questions are answered here.'

}

export const translations: Record<SupportedLanguages, WorkflowTranslation> = {
    'en-EN': english,
}