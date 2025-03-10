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
    'Append {type}': 'Ajouter {type}',
    'Add Lane above': 'Ajouter une voie ci-dessus',
    'Divide into two Lanes': 'Divisé en deux voies',
    'Divide into three Lanes': 'Divisé en trois voies',
    'Add Lane below': 'Ajouter une voie ci-dessous',
    'Append ReceiveTask': 'Ajouter ReceiveTask',
    'Append MessageIntermediateCatchEvent': 'Ajouter MessageIntermediateCatchEvent',
    'Append TimerIntermediateCatchEvent': 'Ajouter TimerIntermediateCatchEvent',
    'Append ConditionIntermediateCatchEvent': 'Ajouter ConditionIntermediateCatchEvent',
    'Append SignalIntermediateCatchEvent': 'Ajouter SignalIntermediateCatchEvent',
    'Append compensation activity': 'Ajouter une activité de compensation',
    'Append EndEvent': 'Ajouter événement de fin',
    'Append Gateway': 'Ajouter Passerelle',
    'Append Task': 'Ajouter Tâche',
    'Append Intermediate/Boundary Event': 'Ajouter un événement intermédiaire/limite',
    'Change type': 'Changer de type',
    'Connect using Association': 'Se connecter en utilisant l association',
    'Connect using Sequence/MessageFlow or Association': 'Se connecter en utilisant Sequence/MessageFlow ou Association',
    'Connect using DataInputAssociation': 'Se connecter à l aide de DataInputAssociation',
    'Remove': 'Supprimer',
    'no shape type specified': 'Aucun type de forme spécifié',
    'out of bounds release': 'Sortie hors limites',
    'more than {count} child lanes': 'Plus que {count} couloirs enfants',
    'element required': 'élément requis',
    'no parent for {element} in {parent}': 'Pas de parent pour {element} dans {parent}',
    'Create {type}': 'Créer {type}',
    'Activate the hand tool': 'Activer l outil manuel',
    'Activate the lasso tool': 'Activer l outil lasso',
    'Activate the Create/remove space tool': 'Activer l outil Créer/supprimer un espace',
    'Activate the global connect tool': 'Activer l outil de connexion globale',
    'Create StartEvent': 'Créer événement de début',
    'Create Intermediate/Boundary Event': 'Créer un événement intermédiaire/limite',
    'Create EndEvent': 'Créer événement de fin',
    'Create Gateway': 'Créer passerelle',
    'Create Task': 'Créer Tâche',
    'Create DataObjectReference': 'Créer DataObjectReference',
    'Create DataStoreReference': 'Créer DataStoreReference',
    'Create expanded SubProcess': 'Créer un sous-processus développé',
    'Create Pool/Participant': 'Créer un pool/participant',
    'Create Group': 'Créer un Groupe',
    'Parallel Multi Instance': 'Instance multiple parallèle',
    'Sequential Multi Instance': 'Instance multiple séquentielle',
    'Loop': 'Boucle',
    'Ad-hoc': 'Ad-hoc',
    'element {element} referenced by {referenced}#{property} not yet drawn': 'élément {element} référencé par {referenced}#{property} pas encore dessiné',
    'unknown di {di} for element {semantic}': 'inconnu di {di} pour élément {semantic}',
    'missing {semantic}#attachedToRef': 'manquant {semantic}#attachedToRef',
    '{semantic}#{side} Ref not specified': '{semantic}#{side} Réf non précisé',
    'already rendered {element}': 'déjà rendu {element}',
    'failed to import {element}': 'échec de l importation {element}',
    'multiple DI elements defined for {element}': 'plusieurs éléments DI définis pour {element}',
    'no bpmnElement referenced in {element}': 'aucun bpmnElement référencé dans {element}',
    'diagram not part of bpmn:Definitions': 'diagramme ne faisant pas partie de bpmn : Définitions',
    'no diagram to display': 'pas de diagramme à afficher',
    'no process or collaboration to display': 'Aucun processus ou collaboration à afficher',
    'correcting missing bpmnElement on {plane} to {rootElement}': 'correction du bpmnElement manquant sur {plane} pour {rootElement}',
    'unsupported bpmnElement for {plane}: {rootElement}': 'bpmnElement non pris en charge pour {plane}: {rootElement}',
    'unrecognized flowElement {element} in context {context}': 'Élément de flux non reconnu {element} dans le contexte {context}',
    'HELLO {you}!': 'SALUT {you}!'
};
