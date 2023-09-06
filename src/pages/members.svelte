<Page name="members">
    <Navbar title="Members" backLink>
        <Subnavbar inner={false}>
            <Searchbar searchContainer=".search-list" searchIn=".item-title" />
          </Subnavbar>
    </Navbar>
    <List strongIos outlineIos dividersIos class="searchbar-not-found">
        <ListItem title="Nothing found" />
    </List>
</Page>
<script>
import {
    Page,
    Navbar,
    Subnavbar,
    Searchbar,
    List,
    ListItem,
} from 'framework7-svelte';
</script>    