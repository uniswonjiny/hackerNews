//news newest ask show jobs
let base_url = 'https://api.hnpwa.com/v0/';
let base_type = "news";
let base_page_num = 1;

// 상단 메뉴를 선택한 경우
function menuEvent(type){
    base_type = type;
    base_page_num = 1;
    const elArr = document.querySelectorAll('.pagetop a');
    //메뉴상단 선택 부분 변경
    elArr.forEach(el =>{
        el.className = "";
        if(el.innerHTML===type)el.className = "selected";
    });
    // 데이터 가져오기
    dataFetch(base_type , base_page_num);
}

// 서버로 돌리지 않는 경우임 서버로 돌리는 환경에서 대폭 변경함
function router(val){
    base_page_num +=1;
    dataFetch(base_type , base_page_num);
}
// 데이터를 가져오는곳
function dataFetch(){
    axios.get(`${base_url}${base_type}/${base_page_num}.json`)
        .then(res=>{
            if(res.data.length===0) {
                base_page_num -=1; // 데이터가 없으로므 이전 페이지 정보로 변경한다. 페이징 값을 데이터가 있는 마지막 페이지로 유지하기 위해
                alert('더이상 데이터 가 없습니다');
                return; // 원래 alert 를 작동할 경우 멈추지만 나중에 다른 알림 창을 사용하면 강제 중지하는 구문이 필요하다
            }
            trContentCreate(res.data);
        });
}

// url 을 생성하는 부분
function trContentCreate(list){
    let template = '';
    list.map((item , index)=>{
        template += `
       <tr class="athing" id=${item.id}>
            <td align="right" valign="top" class="title"><span class="rank">${(base_page_num-1)*10+index+1}.</span></td>
            <td valign="top" class="votelinks">
                <center>
                    <a id="up_${item.id}" href="vote?id=${item.id}&amp;how=up&amp;goto=newest"><div class="votearrow" title="upvote"></div></a>
                </center></td>
            <td class="title"><a href=${item.url} class="storylink" rel="nofollow">${item.title}</a>
                <span class="sitebit comhead"> (<a href="from?site=reddit.com"><span class="sitestr">reddit.com</span></a>)</span></td>
       </tr>
       <tr><td colspan="2"></td>
            <td class="subtext"><span class="score" id="score_${item.id}">1 point</span> by <a href="user?id=visualradio" class="hnuser">visualradio</a> <span class="age" title="2021-07-28T02:53:10"><a href="item?id=${item.id}">0 minutes ago</a></span> <span id="unv_${item.id}"></span> | <a href="hide?id=27979826&amp;goto=newest">hide</a> | <a href="https://hn.algolia.com/?query=Principles%20of%20Federations&amp;type=story&amp;dateRange=all&amp;sort=byDate&amp;storyText=false&amp;prefix&amp;page=0" class="hnpast">past</a> | <a href="item?id=${item.id}">discuss</a> </td>
        </tr>
        <tr class="spacer" style="height:5px"></tr>
    `;
    });
    template +='<tr class="spacer" style="height:5px"></tr><tr class="spacer" style="height:5px"></tr>'
    template +=`<tr><td colspan="2"></td><td class="title"><a href="javascript:void(0);" onclick=router(${base_page_num});  class="morelink" rel="next">More</a></td></tr>`

    let container = document.querySelector("tbody.container");
    container.innerHTML = template;
}
// 초기 로딩시 값을 가져온다.
dataFetch(base_type , base_page_num);
//trContentCreate();