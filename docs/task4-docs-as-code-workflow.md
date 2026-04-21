---
sidebar_position: 7
title: Docs-as-Code Workflow
---

# End-to-End Documentation Workflow

1. **Review the Jira ticket and capture the initial scope.**  
   Read the Jira ticket to understand the Smart Filters feature, expected release, linked work items, and any available acceptance criteria. Note what is known and what still needs clarification.

2. **Confirm the release timeline and documentation deadline.**  
   Check the product release date and work backward to plan documentation drafting, review, revision, and publishing within the two-week timeline.

3. **Identify the required stakeholders.**  
   List the product manager, developer, designer, QA contact, and release owner so you know who can confirm behavior, terminology, and final scope.

4. **Access the feature in staging.**  
   Log in to staging, verify that Smart Filters is available, and make sure you have the right permissions, sample data, and environment access to test it properly.

5. **Gather all available source material.**  
   Collect the Jira ticket, design files, PR links, QA notes, internal discussions, screenshots, and any related existing documentation. Keep these in one working note for traceability.

6. **Explore the feature end to end.**  
   Use Smart Filters in staging as a user would. Record the full workflow, visible labels, states, messages, prerequisites, and any limits shown in the product.

7. **Capture evidence from the product.**  
   Take screenshots, note exact UI text, and record sample flows. Use the product itself as the main source of truth for user-facing documentation.

8. **Define the documentation scope.**  
   Decide what needs to be created or updated, such as a feature topic, task topic, release note, screenshots, navigation updates, and related page links.

9. **Clarify gaps with stakeholders.**  
   Send focused questions only for the items that remain unclear after testing, such as intended terminology, supported scenarios, or known limitations.

10. **Create a working branch in the docs repository.**  
    Pull the latest main branch and create a feature branch, such as `feature/smart-filters-docs`, so the documentation work is isolated and reviewable.

11. **Draft or update the Markdown content.**  
    Create new pages or update existing ones in the correct Docusaurus docs folders. Add front matter, headings, and content that follows the repository’s structure and writing style.

12. **Add assets and navigation updates.**  
    Save screenshots in the correct static assets folder, link them in the Markdown, and update sidebars or index pages so Smart Filters can be found easily in the docs site.

13. **Run local preview and quality checks.**  
    Build and preview the site locally to confirm that pages render correctly. Check links, images, formatting, navigation, and any linting or validation rules used in the repository.

14. **Commit and push the changes.**  
    Create clean Git commits with meaningful messages, then push the branch to the remote repository so the work is ready for collaborative review.

15. **Open a pull request.**  
    Create a PR that summarizes the documentation changes, links the Jira ticket, and includes screenshots or preview details for reviewers.

16. **Address review feedback and revalidate.**  
    Update the documentation based on comments from documentation reviewers and SMEs, then run the build and checks again to confirm nothing is broken.

17. **Merge and publish the documentation.**  
    After approvals and successful checks, merge the PR into the main branch and follow the team’s publishing process so the documentation goes live with the release.

18. **Verify production and close the loop.**  
    Review the live documentation site to confirm the pages, links, images, and navigation work correctly. Then update the Jira ticket with the PR and published doc links and notify stakeholders that the documentation is live.