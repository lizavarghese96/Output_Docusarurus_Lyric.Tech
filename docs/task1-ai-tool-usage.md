---
title: AI Tool Usage
---

# AI Tool Usage

## Tools Used

I used the following AI tools during this assignment:

- **ChatGPT** – used for planning the assignment, setting up the Docusaurus framework, structuring documentation, refining wording, and troubleshooting configuration issues
- **Claude** – used for alternative phrasing, tone refinement, and simplifying technical explanations
- **Gemini** – used to compare responses, validate alternate wording, and explore different ways to present concise product messaging

I used more than one AI tool intentionally. This helped me compare outputs, identify generic wording, and refine the content instead of relying on a single first draft.

---

## How AI Was Used During the Assignment

AI was used in two main ways:

1. **Content support**
   - drafting feature documentation
   - refining release notes
   - improving UI messaging
   - structuring the docs-as-code workflow

2. **Implementation support**
   - setting up Docusaurus from scratch
   - fixing environment issues with Node, npm, and PowerShell
   - correcting `sidebars.js`, `docusaurus.config.js`, and CSS
   - removing default Docusaurus template content and adapting the site for the assignment

This was useful because the assignment required both content creation and documentation-site setup.

---

## Example Prompts and Observations

### 1. Bar Chart Feature Documentation

**Prompt used**

Write a user-facing topic for Bar charts. The documentation should be clear, simple, and well-structured. Explain what a bar chart is and when to use it. Document how to add a bar chart, configure basic data such as X-axis and Y-axis, and customize it at a high level. Do not invent features or behaviors not shown in the video or screenshots.

**What worked**

- It helped create an initial structure quickly
- It gave a usable flow for:
  - overview
  - when to use it
  - add the chart
  - configure X-axis and Y-axis
  - customize at a high level

**What didn’t work**

- Early outputs sometimes added assumptions beyond the screenshots
- Some responses sounded generic and not product-specific
- Some wording described features more broadly than the assignment allowed

**How the prompt was improved**

The prompt was refined to make the constraint much stricter:

Only use information visible in the provided screenshots and video. Do not invent additional chart behavior, advanced settings, or unsupported workflows.

**Why this refinement mattered**

The assignment explicitly required accuracy based only on the supplied material. This prompt change helped keep the content grounded in evidence.

---

### 2. Release Notes

**Prompt used**

Write a short release note announcing the new Bar Chart added to the list of charts. Focus on user value, keep it concise, and make it sound polished without becoming overly promotional.

**What worked**

- It helped generate concise announcement-style text quickly.
- It surfaced multiple tone options, from formal to slightly more modern.

**What didn’t work**

- Some initial outputs were too plain and lacked energy.
- Other outputs became too generic or sounded like marketing copy.
- A few versions did not reflect the actual assignment context strongly enough.

**How the prompt was improved**

The prompt was refined to better control tone:

Write a concise release note for the new Bar Chart in Apps Studio. Focus on practical user value such as comparing values across categories and spotting differences more easily. Keep the tone polished and product-facing, but not promotional.

**Why this refinement mattered**

This helped produce a release note that felt more thoughtful and engaging while still staying appropriate for product documentation.

---

### 3. UI Messaging

**Prompt used**

Improve the user-facing messages in the provided screenshots. Make the copy clearer, more concise, and more helpful. Keep important warnings intact and align the wording with UX writing best practices.

**What worked**

- It helped improve clarity and sentence structure.
- It identified wording problems such as grammar issues and inconsistent terminology.
- It suggested more direct action-oriented language.

**What didn’t work**

- Some versions over-simplified the warning text.
- Some suggestions removed useful context from the modal and form copy
- A few outputs did not preserve example values or field-specific guidance shown in the screenshot

**How the prompt was improved**

The prompt was refined to preserve important context:

Keep the warning and field-level guidance intact. Improve clarity and conciseness without removing critical information shown in the screenshot. Retain example values where they help users understand what to enter.

**Why this refinement mattered**

This made the UI copy more useful and realistic, especially for the Azure Blob connection screen where the example value and exact field guidance mattered.

---

### 4. Docs-as-Code Workflow

**Prompt used**

Write a complete step-by-step docs-as-code workflow for documenting a feature called Smart Filters from the moment the Jira ticket is received until the documentation is live in production. Include branching, authoring, pull requests, validation, review, and publishing.

**What worked**

- It helped generate a complete lifecycle quickly.
- It covered the expected docs-as-code mechanics well.
- It included realistic steps such as staging review, branching, commit workflow, PR review, validation, and production publishing.

**What didn’t work**

- The first version was too long for a Docusaurus documentation page.
- Some steps were too detailed for the assignment format.
- It needed tightening to feel readable inside the documentation site.

**How the prompt was improved**

The prompt was refined to control length and readability:

Shorten the docs-as-code workflow to 15–18 steps without losing the full process. Keep it structured, practical, and suitable for inclusion in a Docusaurus documentation page.

**Why this refinement mattered**

This helped create a version that still demonstrated process maturity while being easier to read in the final submission.

---

### 5. Docusaurus Setup and Troubleshooting

**Prompt used**

Help me get started with Docusaurus from scratch to end. I have already created the output repository and removed the docs and src folders. Guide me step by step and help me fix any setup issues.

**What worked**

- It provided a practical setup path from repository structure to local run.
- It helped troubleshoot environment issues in sequence.
- It supported fixing:
  - missing Node installation
  - PowerShell execution issues
  - `npm` path problems
  - Docusaurus scaffold limitations in a non-empty folder
  - sidebar and config errors
  - default template cleanup
  - homepage and CSS updates

**What didn’t work**

- Some steps needed to be adapted to the actual machine setup.
- A few fixes had to be refined after real errors appeared.
- The setup process required repeated adjustment based on local environment behavior.

**How the prompt was improved**

As issues appeared, the prompts became more specific, for example:
- explain this exact terminal error
- fix this `docusaurus.config.js` problem
- remove the default blog and tutorial content
- keep the dark mode toggle but remove unwanted starter elements
- update the homepage to reflect assignment content instead of default Docusaurus cards

**Why this refinement mattered**

This made the AI support far more useful because the guidance moved from generic setup advice to issue-specific troubleshooting.

---

## Challenges Encountered While Using AI

The most useful lesson from this assignment was that AI worked best when the prompt was **specific, constrained, and grounded in the real task**.

### Challenges that came up

- **Generic responses**
  Some early outputs sounded correct but were too broad or template-like.

- **Assumptions beyond source material**
  For the feature documentation task, AI sometimes described functionality not clearly visible in the screenshots or video.

- **Too much detail**
  For the docs-as-code workflow, the first outputs were complete but too long for the final Docusaurus page.

- **Implementation vs. content mismatch**
  Some setup suggestions needed adjustment once real Docusaurus, Node, PowerShell, and configuration errors appeared.

- **Template leftovers**
  During Docusaurus setup, default tutorial content, blog content, and homepage elements had to be removed manually even after the framework was working.

---

## Manual Edits Made

All AI-generated output was manually reviewed and revised before being added to the final deliverables.

### Key manual edits included

- **Removing unsupported assumptions**  
  Any content not directly supported by the screenshots, video, or assignment instructions was removed.

- **Aligning with the actual UI**  
  Labels, steps, and wording were adjusted to match what was visible in the product screenshots.

- **Shortening content for readability**  
  Long AI-generated sections were edited to fit the Docusaurus page structure and improve scannability.

- **Refining tone**  
  Some outputs were too generic, too formal, or too promotional. These were rewritten to sound more like polished product documentation.

- **Improving structure**  
  Content was reorganized into a clearer sequence so that each page felt intentional and easy to navigate.

- **Fixing technical setup manually**  
  Even when AI suggested the right direction, actual implementation still required manual updates to:
  - `sidebars.js`
  - `docusaurus.config.js`
  - `custom.css`
  - homepage content
  - template cleanup
  