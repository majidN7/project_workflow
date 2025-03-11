/**
 * Copyright 2021 FlowSquad GmbH
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * This file contains the strings used in the bpmn-js module.
 */
export default {
        'Append {type}': 'إلحاق {type}',
        'Add Lane above': 'إضافة مسار أعلاه',
        'Divide into two Lanes': 'تقسيم إلى مسارين',
        'Divide into three Lanes': 'تقسيم إلى ثلاثة مسارات',
        'Add Lane below': 'إضافة مسار أدناه',
        'Append ReceiveTask': 'إلحاق مهمة الاستقبال',
        'Append MessageIntermediateCatchEvent': 'إلحاق حدث وسيط لالتقاط الرسالة',
        'Append TimerIntermediateCatchEvent': 'إلحاق حدث وسيط لالتقاط المؤقت',
        'Append ConditionIntermediateCatchEvent': 'إلحاق حدث وسيط لالتقاط الشرط',
        'Append SignalIntermediateCatchEvent': 'إلحاق حدث وسيط لالتقاط الإشارة',
        'Append compensation activity': 'إلحاق نشاط التعويض',
        'Append EndEvent': 'إلحاق حدث النهاية',
        'Append Gateway': 'إلحاق البوابة',
        'Append Task': 'إلحاق المهمة',
        'Append Intermediate/Boundary Event': 'إلحاق الحدث الوسيط/الحدودي',
        'Change type': 'تغيير النوع',
        'Connect using Association': 'التوصيل باستخدام الارتباط',
        'Connect using Sequence/MessageFlow or Association': 'التوصيل باستخدام تدفق التسلسل/الرسالة أو الارتباط',
        'Connect using DataInputAssociation': 'التوصيل باستخدام ارتباط إدخال البيانات',
        'Remove': 'إزالة',
        'no shape type specified': 'لم يتم تحديد نوع الشكل',
        'out of bounds release': 'إصدار خارج الحدود',
        'more than {count} child lanes': 'أكثر من {count} مسارات فرعية',
        'element required': 'العنصر مطلوب',
        'no parent for {element} in {parent}': 'لا يوجد عنصر أب لـ {element} في {parent}',
        'Create {type}': 'إنشاء {type}',
        'Activate the hand tool': 'تفعيل أداة اليد',
        'Activate the lasso tool': 'تفعيل أداة اللاستو',
        'Activate the create/remove space tool': 'تفعيل أداة إنشاء/إزالة المساحة',
        'Activate the global connect tool': 'تفعيل أداة الاتصال العالمية',
        'Create StartEvent': 'إنشاء حدث البداية',
        'Create Intermediate/Boundary Event': 'إنشاء حدث وسيط/حدودي',
        'Create EndEvent': 'إنشاء حدث النهاية',
        'Create Gateway': 'إنشاء بوابة',
        'Create Task': 'إنشاء مهمة',
        'Create DataObjectReference': 'إنشاء مرجع كائن البيانات',
        'Create DataStoreReference': 'إنشاء مرجع مخزن البيانات',
        'Create expanded SubProcess': 'إنشاء عملية فرعية موسعة',
        'Create Pool/Participant': 'إنشاء مجموعة/مشارك',
        'Create Group': 'إنشاء مجموعة',
        'Parallel Multi Instance': 'متعدد النسخ المتوازي',
        'Sequential Multi Instance': 'متعدد النسخ التسلسلي',
        'Loop': 'حلقة',
        'Ad-hoc': 'مخصص',
        'element {element} referenced by {referenced}#{property} not yet drawn': 'العنصر {element} المشار إليه بواسطة {referenced}#{property} لم يتم رسمه بعد',
        'unknown di {di} for element {semantic}': 'di غير معروف {di} للعنصر {semantic}',
        'missing {semantic}#attachedToRef': 'مفقود {semantic}#attachedToRef',
        '{semantic}#{side} Ref not specified': '{semantic}#{side} Ref غير محدد',
        'already rendered {element}': 'تم عرض {element} بالفعل',
        'failed to import {element}': 'فشل استيراد {element}',
        'multiple DI elements defined for {element}': 'تم تعريف عناصر DI متعددة لـ {element}',
        'no bpmnElement referenced in {element}': 'لا يوجد bpmnElement مشار إليه في {element}',
        'diagram not part of bpmn:Definitions': 'الرسم التخطيطي ليس جزءًا من bpmn:Definitions',
        'no diagram to display': 'لا يوجد رسم تخطيطي لعرضه',
        'no process or collaboration to display': 'لا توجد عملية أو تعاون لعرضه',
        'correcting missing bpmnElement on {plane} to {rootElement}': 'تصحيح bpmnElement المفقود على {plane} إلى {rootElement}',
        'unsupported bpmnElement for {plane}: {rootElement}': 'bpmnElement غير مدعوم لـ {plane}: {rootElement}',
        'unrecognized flowElement {element} in context {context}': 'flowElement غير معروف {element} في السياق {context}',
        'HELLO {you}!': 'مرحبًا {you}!'
    
};
