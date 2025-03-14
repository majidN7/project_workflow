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


import en from "./languages/en.js";
import fr from "./languages/fr.js";
import ar from "./languages/ar.js";


/**
 * All available languages.
 */
const languages = {
    en, fr, ar
};

// The default language to use if none is specified in the configuration
const defaultLanguage = "en";


// Contains all missing translations discovered to prevent logging them
// multiple times.
const missing = [];

console.log("Please help us translate by creating a pull request!");

/**
 * This function initializes the translation plugin.
 */
export default function Translator() {
    let currentLanguage = languages[this.currentLanguage()];

    // Return the translation function. It takes the template string and the parameters,
    // translates it and returns it.
    return (template, parameters) => {
        // If the requested string is not available in the current language
        if (!currentLanguage[template]) {
            // Check if it was already printed to the console
            if (missing.indexOf(template) === -1) {
                // Print the missing translation to the console ´
                console.log(`Missing translation: ${template}`);
                missing.push(template);
            }
        }

        // Use the translated string or the original template string as fallback
        const translation = currentLanguage[template] || template;

        // Replace all parameters in the template string with the provided values
        return translation.replace(/{([^}]+)}/g, function (_, key) {
            return (parameters || {})[key] || '{' + key + '}'
        });
    };
};

Translator.prototype.currentLanguage = function () {
    return defaultLanguage;
}

// Specify what values should be injected into the function above
Translator.$inject = [];
