function trContentCreate(){
    let template = `
       <tr class="athing" id="27979826">
            <td align="right" valign="top" class="title"><span class="rank">1.</span></td>
            <td valign="top" class="votelinks"><center><a id="up_27979826" href="vote?id=27979826&amp;how=up&amp;goto=newest"><div class="votearrow" title="upvote"></div></a></center></td><td class="title"><a href="https://www.reddit.com/r/newphysiocrats/comments/osx8ba/principles_of_federations/" class="storylink" rel="nofollow">Principles of Federations</a><span class="sitebit comhead"> (<a href="from?site=reddit.com"><span class="sitestr">reddit.com</span></a>)</span></td></tr><tr><td colspan="2"></td>
            <td class="subtext"><span class="score" id="score_27979826">1 point</span> by <a href="user?id=visualradio" class="hnuser">visualradio</a> <span class="age" title="2021-07-28T02:53:10"><a href="item?id=27979826">0 minutes ago</a></span> <span id="unv_27979826"></span> | <a href="hide?id=27979826&amp;goto=newest">hide</a> | <a href="https://hn.algolia.com/?query=Principles%20of%20Federations&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a> | <a href="item?id=27979826">discuss</a> </td>
        </tr>
        <tr class="spacer" style="height:5px"></tr> 
    `;

    let container = document.querySelector("tbody.container");
    container.innerHTML = template;
}

trContentCreate();