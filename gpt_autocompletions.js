(() => {
    const modalCSS = `
        #apiClientOverlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#ffffe0b3;z-index:9999}#apiClientModal{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);width:90%;max-width:1000px;max-height:90vh;background-color:#fff;border:1px solid #e0e0e0;border-radius:8px;box-shadow:0 5px 15px #00000026;z-index:10000;padding:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;color:#4a4a4a;display:flex;flex-direction:column;overflow:hidden}#apiClientModal .modal-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #f0f0f0;padding:15px 25px;background-color:#f9f9f9}#apiClientModal .modal-header h3{margin:0;font-size:1.15em;font-weight:500;color:#333}#apiClientModal button#closeApiClientModalBtn{background-color:transparent;border:none;font-size:1.8em;color:#aaa;padding:0;line-height:1;cursor:pointer;font-weight:300}#apiClientModal button#closeApiClientModalBtn:hover{background-color:transparent;color:#777}#apiClientModal .modal-body{padding:25px;overflow-y:auto;flex-grow:1}#apiClientModal label{display:block;margin-bottom:6px;font-weight:500;font-size:.95em;color:#555}#apiClientModal input[type="text"],#apiClientModal input[type="password"],#apiClientModal select{width:100%;padding:10px 12px;margin-bottom:18px;border:1px solid #dcdcdc;border-radius:5px;box-sizing:border-box;font-size:1em;background-color:#fff;color:#4a4a4a;appearance:none;background-repeat:no-repeat;background-position:right 12px center;background-size:10px 10px;padding-right:30px}#apiClientModal input[type="text"]:focus,#apiClientModal input[type="password"]:focus,#apiClientModal select:focus{border-color:#6366F1;outline:none;box-shadow:0 0 0 2px #6366f14d}#apiClientModal .controls-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:20px}#apiClientModal .control-group{display:flex;align-items:center;gap:10px;flex-basis:50%}#apiClientModal .control-group label{margin-bottom:0;white-space:nowrap}#apiClientModal .control-group select{margin-bottom:0;flex-grow:1;padding:8px 10px;min-width:110px}#apiClientModal .toggle-switch{margin-bottom:0;user-select:none;display:flex;align-items:center;width:100%}#apiClientModal .toggle-switch span{font-weight:500;font-size:.95em;color:#555;margin-right:10px;white-space:nowrap}#apiClientModal .toggle-switch input{height:0;width:0;visibility:hidden}#apiClientModal .toggle-switch label{cursor:pointer;text-indent:-9999px;width:40px;height:20px;background:#ddd;display:block;border-radius:100px;position:relative;flex-shrink:0;margin-left:auto}#apiClientModal .toggle-switch label:after{content:'';position:absolute;top:2px;left:2px;width:16px;height:16px;background:#fff;border-radius:90px;transition:.3s}#apiClientModal .toggle-switch input:checked + label{background:#6366F1}#apiClientModal .toggle-switch input:checked + label:after{left:calc(100% - 2px);transform:translateX(-100%)}#apiClientModal .toggle-switch label:active:after{width:22px}#apiClientModal button#submitApiRequest,#apiClientModal button#downloadCsvBtn,#apiClientModal button#seeNodesBtn{padding:10px 20px;background-color:#6366F1;color:#fff;border:none;border-radius:5px;cursor:pointer;font-size:1em;font-weight:500;transition:background-color .2s ease;margin-right:5px}#apiClientModal button#submitApiRequest:hover,#apiClientModal button#downloadCsvBtn:hover,#apiClientModal button#seeNodesBtn:hover{background-color:#4F46E5}#apiClientModal #modalLog{margin-top:20px;padding:12px;border:1px solid #eee;border-radius:5px;height:120px;overflow-y:scroll;font-size:.85em;line-height:1.5;color:#666;background-color:#fdfdfd;white-space:pre-wrap}#apiClientModal #modalLog div{margin-bottom:3px}#apiClientModal #modalLog .log-error{color:#e57373;font-weight:500}#apiClientModal #resultsTableContainer{margin-top:20px}#apiClientModal #resultsTableContainer h4{margin-bottom:10px;font-size:1.05em;font-weight:500;color:#444}#apiClientModal #resultsTableContainer table{width:100%;border-collapse:collapse;border:1px solid #e8e8e8;border-radius:5px;overflow:hidden}#apiClientModal #resultsTableContainer th,#apiClientModal #resultsTableContainer td{border-bottom:1px solid #e8e8e8;padding:10px 12px;text-align:left}#apiClientModal #resultsTableContainer tr:last-child td{border-bottom:none}#apiClientModal #resultsTableContainer th{background-color:#f5f7fa;font-weight:500;font-size:.9em;color:#555;text-transform:uppercase;letter-spacing:.5px}#apiClientModal #resultsTableContainer td{font-size:.95em;color:#555}#apiClientModal .modal-footer{border-top:1px solid #f0f0f0;padding:12px 25px;font-size:.85em;text-align:center;background-color:#f9f9f9;color:#777}#apiClientModal .modal-footer a{color:#6366F1;text-decoration:none}#apiClientModal .modal-footer a:hover{text-decoration:underline}.hidden{display:none!important}#apiClientModal .result-actions{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}#apiClientModal #nodeChartContainer{width:100%;height:600px;border:1px solid #e8e8e8;border-radius:5px;margin-top:20px;overflow:hidden}#apiClientModal #nodeChartContainer svg{width:100%;height:100%}#apiClientModal .node circle{fill:#6366F1;stroke-width:2;stroke:#fff}#apiClientModal .node text{font-size:12px}#apiClientModal .node.root circle{fill:#4F46E5;r:10}#apiClientModal .link{fill:none;stroke:#ccc;stroke-width:1.5px}

        /* Floating Button Styles */
        #openApiClientModalBtn {
            position: fixed;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            background-color: #6366F1;
            color: white;
            border: none;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            font-size: 24px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            cursor: pointer;
            z-index: 9990;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        #openApiClientModalBtn:hover {
            background-color: #5153d4;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    `;

    const modalHTML = `
        <div class="modal-header">
            <h3>ChatGPT Autocompletions Scraper</h3>
            <button id="closeApiClientModalBtn" title="Close">×</button>
        </div>
        <div class="modal-body">
            <div>
                <label for="apiToken">Bearer Token: <a href="https://github.com/Xyborg/ChatGPT-Autocompletions-Scraper?tab=readme-ov-file#how-to-get-your-bearer-token" target="_blank" style="display: inline-flex; align-items: center; margin-left: 8px; padding: 2px 6px; background-color: #f0f0f0; border-radius: 10px; font-size: 0.75em; color: #6366F1; text-decoration: none; transition: all 0.2s ease;"><span style="margin-right: 4px;">ℹ️</span>How to get it?</a></label>
                <input type="password" id="apiToken" placeholder="Paste your __Secure-next-auth.session-token here">
            </div>
            <div>
                <label for="apiKeyword">Keyword (min. 4 characters):</label>
                <input type="text" id="apiKeyword" value="weather ">
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap;">
                <div style="display: flex; align-items: center; min-width: 200px; margin-right: 20px; margin-bottom: 10px;">
                    <span style="margin-right: 15px; font-weight: 500; font-size: 0.95em; color: #555;">Search Mode</span>
                    <div class="toggle-switch" style="width: auto;">
                        <input type="checkbox" id="apiSearchMode">
                        <label for="apiSearchMode">Toggle Search Mode</label>
                    </div>
                </div>
                <div id="alphabetSuggestionsControl" style="display: flex; align-items: center; min-width: 200px; margin-bottom: 10px;">
                    <span style="margin-right: 15px; font-weight: 500; font-size: 0.95em; color: #555;">Append Alphabet Suggestions</span>
                    <div class="toggle-switch" style="width: auto;">
                        <input type="checkbox" id="apiShowSuggestions">
                        <label for="apiShowSuggestions">Toggle</label>
                    </div>
                </div>
            </div>
            <div id="depthControlGroup" class="control-group hidden" style="margin-bottom: 20px;">
                <label for="apiDepthLevel">Depth:</label>
                <select id="apiDepthLevel">
                    <option value="0" selected>0 (Single)</option>
                    <option value="1">1 Level</option>
                    <option value="2">2 Levels</option>
                    <option value="3">3 Levels</option>
                    <option value="4">4 Levels</option>
                    <option value="5">5 Levels</option>
                </select>
            </div>
            <button id="submitApiRequest">Fetch Completions</button>
            <div id="modalLog">Logs will appear here...</div>
            <div id="resultsTableContainer"></div>
        </div>
        <div class="modal-footer">
            Created by <a href="https://www.martinaberastegue.com" target="_blank" rel="noopener noreferrer"><strong>Martin Aberastegue</strong></a>
        </div>
    `;

    let allCompletionsSet = new Set();

    function logToModal(message, isError = false) {
        const logArea = document.getElementById('modalLog');
        if (logArea) {
            const timestamp = new Date().toLocaleTimeString();
            const entry = document.createElement('div');
            if (isError) { entry.classList.add('log-error'); }
            entry.textContent = `[${timestamp}] ${message}`;
            logArea.appendChild(entry);
            logArea.scrollTop = logArea.scrollHeight;
        }
    }

    function escapeHtml(unsafe) {
        if (!unsafe) return '';
        return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }

    function displayResults(completionsArray) {
        const container = document.getElementById('resultsTableContainer');
        if (!container) return;

        logToModal(`Displaying ${completionsArray.length} unique completions found.`);
        container.innerHTML = '';

        if (completionsArray.length === 0) {
            container.innerHTML = '<p style="color: #777; font-style: italic;">No completions found or process failed.</p>';
            return;
        }

        // Create header with result count
        const headerDiv = document.createElement('div');
        headerDiv.className = 'result-actions';
        
        const title = document.createElement('h4');
        title.textContent = `Results (${completionsArray.length}):`;
        
        headerDiv.appendChild(title);
        container.appendChild(headerDiv);

        // Create a row for action buttons
        const buttonsRow = document.createElement('div');
        buttonsRow.style.display = 'flex';
        buttonsRow.style.justifyContent = 'flex-end';
        buttonsRow.style.alignItems = 'center';
        buttonsRow.style.marginBottom = '15px';
        container.appendChild(buttonsRow);
        
        // Check if we're in search mode with depth > 0
        const searchModeInput = document.getElementById('apiSearchMode');
        const depthLevelInput = document.getElementById('apiDepthLevel');
        const isSearchMode = searchModeInput && searchModeInput.checked;
        const depthLevel = depthLevelInput ? parseInt(depthLevelInput.value, 10) : 0;
        
        // Add download button (available in all modes)
        const downloadBtn = document.createElement('button');
        downloadBtn.id = 'downloadCsvBtn';
        downloadBtn.textContent = 'Download as CSV';
        downloadBtn.style.padding = '8px 15px';
        downloadBtn.style.backgroundColor = '#6366F1';
        downloadBtn.style.color = '#fff';
        downloadBtn.style.border = 'none';
        downloadBtn.style.borderRadius = '4px';
        downloadBtn.style.cursor = 'pointer';
        downloadBtn.style.fontSize = '14px';
        downloadBtn.style.marginLeft = '10px';
        downloadBtn.addEventListener('click', () => downloadAsCSV(completionsArray));
        buttonsRow.appendChild(downloadBtn);

        // Check if we're in alphabet suggestions mode
        const suggestionsCheckbox = document.getElementById('apiShowSuggestions');
        const isAlphabetSuggestions = suggestionsCheckbox && suggestionsCheckbox.checked && 
                                !document.getElementById('apiSearchMode')?.checked;
        
        // Add view toggle button if in alphabet suggestions mode
        if (isAlphabetSuggestions) {
            const viewToggleButton = document.createElement('button');
            viewToggleButton.id = 'viewToggleButton';
            viewToggleButton.textContent = 'Switch to List View';
            viewToggleButton.style.padding = '8px 15px';
            viewToggleButton.style.backgroundColor = '#f9f9f9';
            viewToggleButton.style.border = '1px solid #e0e0e0';
            viewToggleButton.style.borderRadius = '4px';
            viewToggleButton.style.cursor = 'pointer';
            viewToggleButton.style.fontSize = '14px';
            
            viewToggleButton.addEventListener('click', () => {
                const isCurrentlyGrid = viewToggleButton.textContent.includes('List');
                const resultsContainer = document.getElementById('alphabetResultsContainer');
                
                if (isCurrentlyGrid) {
                    // Switch to list view
                    viewToggleButton.textContent = 'Switch to Grid View';
                    displayListView(completionsArray, resultsContainer);
                } else {
                    // Switch to grid view
                    viewToggleButton.textContent = 'Switch to List View';
                    displayGridView(completionsArray, resultsContainer);
                }
            });
            
            // Add toggle button to the buttons row (before download button)
            buttonsRow.insertBefore(viewToggleButton, downloadBtn);
            
            // Create a container for the results that can be updated by the toggle
            const resultsContainer = document.createElement('div');
            resultsContainer.id = 'alphabetResultsContainer';
            container.appendChild(resultsContainer);
            
            // Default to grid view for alphabet suggestions
            displayGridView(completionsArray, resultsContainer);
        } else {
            // Create a dedicated container for the list view
            const resultsContainer = document.createElement('div');
            resultsContainer.id = 'listViewContainer';
            container.appendChild(resultsContainer);
            
            // Use list view for other modes
            displayListView(completionsArray, resultsContainer);
        }
    }

    function downloadAsCSV(completionsArray) {
        if (!completionsArray || completionsArray.length === 0) {
            logToModal("No data to download.", true);
            return;
        }
        
        logToModal("Preparing CSV download...");
        
        // Get the keyword from the input field
        const keywordInput = document.getElementById('apiKeyword');
        const keyword = keywordInput ? keywordInput.value.trim() : 'completions';
        
        // Create CSV content
        let csvContent = "Completion\n";
        completionsArray.sort().forEach(comp => {
            // Escape quotes by doubling them
            const escapedComp = comp.replace(/"/g, '""');
            csvContent += `"${escapedComp}"\n`;
        });
        
        // Create a blob and download link
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.setAttribute('download', `${keyword.replace(/\s+/g, '_')}_suggestions.csv`);
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
        
        // Trigger download and cleanup
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        
        logToModal(`CSV file with ${completionsArray.length} entries downloaded successfully.`);
    }

    function displayGridView(completionsArray, container) {
        // Clear the container first
        container.innerHTML = '';
        
        // Extract the base keyword from the input
        const keywordInput = document.getElementById('apiKeyword');
        const baseKeyword = keywordInput ? keywordInput.value.trim() : '';
        
        // Group completions by appended letter
        const groupedCompletions = {};
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        
        // Initialize groups for each letter
        alphabet.split('').forEach(letter => {
            groupedCompletions[letter] = [];
        });
        
        // Group completions by the letter appended to the keyword
        completionsArray.sort().forEach(comp => {
            if (!comp) return;
            
            // Try to determine which letter group this belongs to
            let found = false;
            for (const letter of alphabet) {
                // Check if the completion starts with the keyword + letter
                if (comp.toLowerCase().startsWith((baseKeyword + ' ' + letter).toLowerCase()) || 
                    comp.toLowerCase().startsWith((baseKeyword + letter).toLowerCase())) {
                    groupedCompletions[letter].push(comp);
                    found = true;
                    break;
                }
            }
            
            // If we couldn't determine the letter, put it in a special group
            if (!found) {
                if (!groupedCompletions['other']) {
                    groupedCompletions['other'] = [];
                }
                groupedCompletions['other'].push(comp);
            }
        });

        // Create a grid layout
        const grid = document.createElement('div');
        grid.style.display = 'grid';
        grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
        grid.style.gap = '15px';
        grid.style.width = '100%';

        // Create a card for each letter group (only if it has items)
        Object.keys(groupedCompletions).sort().forEach(letter => {
            if (groupedCompletions[letter].length === 0) return; // Skip empty groups
            
            const card = document.createElement('div');
            card.style.border = '1px solid #e8e8e8';
            card.style.borderRadius = '5px';
            card.style.overflow = 'hidden';
            card.style.backgroundColor = '#fff';
            
            // Card header
            const header = document.createElement('div');
            header.style.display = 'flex';
            header.style.justifyContent = 'center';
            header.style.padding = '15px 20px';
            header.style.borderBottom = '1px solid #f0f0f0';
            header.style.backgroundColor = '#f9f9f9';
            header.style.alignItems = 'center';
            
            const letterHeader = document.createElement('h2');
            letterHeader.style.margin = '0';
            letterHeader.style.fontSize = '24px';
            letterHeader.style.fontWeight = '500';
            letterHeader.textContent = letter.toUpperCase();
            
            header.appendChild(letterHeader);
            card.appendChild(header);
            
            // Suggestion list
            const suggestionList = document.createElement('div');
            
            groupedCompletions[letter].forEach(comp => {
                const suggestionItem = document.createElement('div');
                suggestionItem.style.padding = '12px 20px';
                suggestionItem.style.borderBottom = '1px solid #f0f0f0';
                
                const suggestionText = document.createElement('span');
                suggestionText.textContent = comp;
                suggestionText.style.fontSize = '14px';
                
                suggestionItem.appendChild(suggestionText);
                suggestionList.appendChild(suggestionItem);
            });
            
            card.appendChild(suggestionList);
            grid.appendChild(card);
        });

        container.appendChild(grid);
    }

    function displayListView(completionsArray, container) {
        // Clear the container first
        container.innerHTML = '';
        
        let tableHTML = `<table style="width:100%;"><thead><tr><th>Completion Suggestion</th></tr></thead><tbody>`;
        completionsArray.sort().forEach(comp => { 
            tableHTML += `<tr><td>${escapeHtml(comp)}</td></tr>`; 
        });
        tableHTML += `</tbody></table>`;
        container.innerHTML = tableHTML;
    }

    async function fetchSingleCompletion(inputText, token, searchMode) {
        logToModal(`Fetching single request for: "${inputText}"...`);
        try {
            const response = await fetch('https://chatgpt.com/backend-api/conversation/experimental/generate_autocompletions', {
                method: 'POST',
                headers: { 'accept': '*/*', 'authorization': `Bearer ${token}`, 'content-type': 'application/json', 'oai-language': 'en-US', 'origin': 'https://chatgpt.com', 'referer': 'https://chatgpt.com/' },
                body: JSON.stringify({ "input_text": inputText, "num_completions": 4, "in_search_mode": searchMode })
            });
            logToModal(`Fetch status for "${inputText}": ${response.status} ${response.statusText}`);
            if (!response.ok) {
                let errorDetails = `Server responded with: ${response.status} ${response.statusText}.`;
                try { const errorData = await response.json(); errorDetails += ` Details: ${JSON.stringify(errorData)}`; } catch (e) { try { const textError = await response.text(); errorDetails += ` Response body (text): ${textError || '(empty)'}`; } catch (e2) {} }
                logToModal(`Error fetching "${inputText}": ${errorDetails}`, true);
                return [];
            }
            const data = await response.json();
            return data.completions || [];
        } catch (error) {
            logToModal(`Network error fetching "${inputText}": ${error.message}`, true);
            return [];
        }
    }

    async function fetchCompletionsRecursive(inputText, currentDepth, maxDepth, token, searchMode) {
        if (currentDepth > maxDepth) {
            logToModal(`Max depth (${maxDepth}) reached for "${inputText}". Stopping recursion.`);
            return;
        }
        const indent = "  ".repeat(currentDepth);
        logToModal(`${indent}Fetching level ${currentDepth} for: "${inputText}"...`);
        
        try {
            const completions = await fetchSingleCompletion(inputText, token, searchMode);

            if (Array.isArray(completions) && completions.length > 0) {
                logToModal(`${indent}Received ${completions.length} completions for "${inputText}".`);
                const nextLevelTasks = [];
                completions.forEach(comp => {
                    if (!allCompletionsSet.has(comp)) {
                        allCompletionsSet.add(comp);
                        
                        if (currentDepth < maxDepth) {
                            nextLevelTasks.push(fetchCompletionsRecursive(comp, currentDepth + 1, maxDepth, token, searchMode));
                        }
                    } else {
                         logToModal(`${indent}  - Skipping duplicate: "${comp}"`);
                    }
                });
                if (nextLevelTasks.length > 0) {
                    logToModal(`${indent}Starting next level (${currentDepth + 1}) requests...`);
                    await Promise.allSettled(nextLevelTasks);
                    logToModal(`${indent}Finished all level ${currentDepth + 1} requests from "${inputText}".`);
                }
            } else {
                 logToModal(`${indent}No completions received for "${inputText}".`);
            }
        } catch (error) {
            logToModal(`${indent}Error in recursive step for "${inputText}": ${error.message}`, true);
        }
    }

    async function fetchAlphabetSuggestions(baseKeyword, token) {
        logToModal(`Fetching alphabet suggestions for base: "${baseKeyword}"...`);
        const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const fetchPromises = [];

        alphabet.forEach(letter => {
            const inputText = `${baseKeyword} ${letter}`;
            fetchPromises.push(fetchSingleCompletion(inputText, token, false));
        });

        const results = await Promise.allSettled(fetchPromises);
        logToModal("All alphabet fetch requests settled.");

        results.forEach((result, index) => {
            if (result.status === 'fulfilled' && Array.isArray(result.value)) {
                result.value.forEach(comp => {
                    if (!allCompletionsSet.has(comp)) {
                        allCompletionsSet.add(comp);
                    }
                });
            } else if (result.status === 'rejected') {
                const inputText = `${baseKeyword} ${alphabet[index]}`;
                logToModal(`Request for "${inputText}" failed: ${result.reason}`, true);
            }
        });
        logToModal("Finished processing alphabet suggestions.");
    }

    function updateControlsUI() {
        const searchModeChecked = document.getElementById('apiSearchMode')?.checked;
        const depthControl = document.getElementById('depthControlGroup');
        const alphabetSuggestionsControl = document.getElementById('alphabetSuggestionsControl');
        
        if (!depthControl || !alphabetSuggestionsControl) return;
        
        if (searchModeChecked) {
            depthControl.classList.remove('hidden');
            alphabetSuggestionsControl.classList.add('hidden');
            logToModal("UI Updated: Showing Depth Selector (Search Mode ON)");
        } else {
            depthControl.classList.add('hidden');
            alphabetSuggestionsControl.classList.remove('hidden');
            logToModal("UI Updated: Search Mode OFF, Showing Alphabet Suggestions Toggle");
        }
    }

    async function handleApiRequest() {
        const tokenInput = document.getElementById('apiToken');
        const keywordInput = document.getElementById('apiKeyword');
        const searchModeInput = document.getElementById('apiSearchMode');
        const depthLevelInput = document.getElementById('apiDepthLevel');
        const suggestionsCheckbox = document.getElementById('apiShowSuggestions');

        const resultsContainer = document.getElementById('resultsTableContainer');
        const logArea = document.getElementById('modalLog');

        if (logArea) logArea.innerHTML = '';
        if (resultsContainer) resultsContainer.innerHTML = '';
        allCompletionsSet = new Set();

        logToModal("Validating inputs...");
        let token = tokenInput ? tokenInput.value.trim() : '';
        const keyword = keywordInput ? keywordInput.value.trim() : '';
        const isSearchMode = searchModeInput ? searchModeInput.checked : false;

        if (!token) { logToModal("Error: Bearer Token cannot be empty.", true); return; }
        if (keyword.length < 4) { logToModal(`Error: Keyword "${keyword}" must be at least 4 characters long.`, true); return; }
        if (token.startsWith("Bearer ")) { token = token.substring(7).trim(); }

        logToModal(`Token processed. Initial Keyword: "${keyword}". Search Mode: ${isSearchMode}`);
        logToModal("Initiating fetch process...");

        try {
            if (isSearchMode) {
                const maxDepth = depthLevelInput ? parseInt(depthLevelInput.value, 10) : 0;
                logToModal(`Recursive Mode Selected. Max Depth: ${maxDepth}`);
                await fetchCompletionsRecursive(keyword, 0, maxDepth, token, true);
                logToModal("All recursive fetch levels complete.");

            } else {
                const showSuggestions = suggestionsCheckbox ? suggestionsCheckbox.checked : false;
                if (showSuggestions) {
                    logToModal("Append Alphabet Mode Selected.");
                    await fetchAlphabetSuggestions(keyword, token);
                    logToModal("Alphabet suggestion fetching complete.");
                } else {
                    logToModal("Single Request Mode Selected.");
                    const completions = await fetchSingleCompletion(keyword, token, false);
                    completions.forEach(comp => allCompletionsSet.add(comp));
                    logToModal("Single request fetch complete.");
                }
            }

            displayResults(Array.from(allCompletionsSet));

        } catch (error) {
            logToModal(`Unhandled error during main process: ${error.message}`, true);
            displayResults([]);
        } finally {
            logToModal("...Process finished.");
        }
    }

    function createFloatingButton() {
        const button = document.createElement('button');
        button.id = 'openApiClientModalBtn';
        button.innerHTML = '🔍';
        button.title = 'Open Autocompletions Scraper';
        document.body.appendChild(button);
        return button;
    }

    function createModal() {
        const overlayDiv = document.createElement('div');
        overlayDiv.id = 'apiClientOverlay';
        const modalDiv = document.createElement('div');
        modalDiv.id = 'apiClientModal';
        modalDiv.innerHTML = modalHTML;

        document.body.appendChild(overlayDiv);
        document.body.appendChild(modalDiv);

        const submitButton = document.getElementById('submitApiRequest');
        const closeButton = document.getElementById('closeApiClientModalBtn');
        const searchModeToggle = document.getElementById('apiSearchMode');

        if (submitButton) { submitButton.addEventListener('click', handleApiRequest); }

        if (closeButton) { closeButton.addEventListener('click', closeModal); }

        overlayDiv.addEventListener('click', closeModal);

        if (searchModeToggle) {
            searchModeToggle.addEventListener('change', updateControlsUI);
            updateControlsUI();
        }

        logToModal("Modal UI Initialized.");
    }

    function closeModal() {
        const modalToRemove = document.getElementById('apiClientModal');
        const overlayToRemove = document.getElementById('apiClientOverlay');
        if (modalToRemove) modalToRemove.remove();
        if (overlayToRemove) overlayToRemove.remove();
    }

    function openModal() {
        closeModal(); // Close any existing modal first
        createModal();
    }

    // Add styles to the page
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = modalCSS;
    document.head.appendChild(styleSheet);

    // Create floating button instead of immediately showing the modal
    const floatingButton = createFloatingButton();
    floatingButton.addEventListener('click', openModal);
})();