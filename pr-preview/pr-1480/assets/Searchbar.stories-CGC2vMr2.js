"use client";var P=Object.defineProperty;var t=(s,e)=>P(s,"name",{value:e,configurable:!0});import{a9 as x,ah as D,a6 as n,a2 as N,I as Q,c as F,T as B}from"./iframe-M-0W2Kc9.js";import{u as R}from"./useIsDesktop-Cn7t9tR4.js";import{S as $}from"./MagnifyingGlass-BCQWJszI.js";import{A as M}from"./AutocompleteItem-CoBnUpv0.js";import{S as G}from"./Section-BRRFv94H.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuItem-Bm0vldGL.js";import"./CheckboxUncheckedIcon-D1N0JUmQ.js";import"./RadioUncheckedIcon-DihvZmzM.js";import"./ItemMedia-BNntQAQS.js";import"./Avatar-DT58NR7U.js";import"./AvatarGroup-CiVqxcXe.js";import"./ItemLabel-lDW_MVeZ.js";import"./Heading-BiiiOHzW.js";import"./useHighlightedText-DPRacH3N.js";import"./ItemControls-CUY2SrAL.js";import"./Badge-CbVFcrSF.js";import"./Tooltip-CQEIh06C.js";import"./ChevronRight-e5zm3v6Y.js";import"./useMenu-D1I6Xbj7.js";import"./QueryLabel-B7kGTmjQ.js";import"./Plus-DyAe2qPf.js";import"./MenuListItem-liqRqbPT.js";import"./MenuListDivider-5CZ-K279.js";import"./Flex-CvQqYnnc.js";const y=t(({className:s,autocomplete:e,expanded:r=!1,onClose:a,tabIndex:o,useGlobalHeader:d=!1,...l})=>{const[m,h]=x.useState(!1),[b,c]=x.useState(void 0),{previousId:i,openId:k}=D(),E=R(),q=t(p=>{const g=p.target?.attributes?.getNamedItem("data-testid")?.value;p?.relatedTarget?.closest('[data-autocomplete="true"]')||p.relatedTarget===null||(g==="search-button-clear"||g==="search-button-close"||g==="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-clear"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-close"&&p.relatedTarget?.getAttribute("data-testid")!=="autocomplete-list")&&(E||i!=="menu"?a?.():k("menu"))},"onBlurCapture");return n.jsxs(U,{className:s,expanded:r,autocomplete:!!e,onBlurCapture:q,useGlobalHeader:d,children:[n.jsx(ee,{...l,expanded:r,onClose:a,tabIndex:o,...e&&{controlsId:"searchbar-autocomplete",activeDescendantId:b},onFocus:t(p=>{l?.onFocus?.(p),m||h(!0)},"onFocus"),onBlur:t(p=>{l?.onBlur?.(p),m&&h(!1)},"onBlur")}),e&&n.jsx(M,{...e,expanded:r,keyboardEvents:m,onSelect:a,id:"searchbar-autocomplete",onActiveItemIdChange:c})]})},"Searchbar"),J="_searchbar_1lexx_1",K="_searchbarExpanded_1lexx_14",z="_searchbarLocal_1lexx_22",w={searchbar:J,searchbarExpanded:K,searchbarLocal:z},U=t(({className:s,children:e,expanded:r=!1,onBlurCapture:a,autocomplete:o=!1,useGlobalHeader:d=!1})=>{const l=N(w.searchbar,s,r&&w.searchbarExpanded,d&&w.searchbarLocal);return n.jsx("div",{className:l,"data-autocomplete":o,onBlurCapture:a,children:e})},"SearchbarBase"),V="_field_uxhly_1",X="_icon_uxhly_10",Y="_input_uxhly_17",W="_clear_uxhly_45",Z="_dismiss_uxhly_62",S={field:V,icon:X,input:Y,clear:W,dismiss:Z},ee=t(({className:s,expanded:e,name:r="q",value:a,placeholder:o="Search",closeButtonAltText:d="Close search",clearButtonAltText:l="Clear search",onFocus:m,onBlur:h,onChange:b,onClear:c,onClose:i,onEnter:k,tabIndex:E,controlsId:q,activeDescendantId:p})=>{const g=x.useRef(null),T=t(L=>{L.key==="Escape"&&g.current?.blur(),L.key==="Enter"&&(g.current?.blur(),k?.())},"handleOnKeyUp");return n.jsxs("div",{className:N(S.field,s),children:[n.jsx("input",{ref:g,onFocus:m,onBlur:h,name:r,value:a,onChange:b,placeholder:o,className:S.input,onKeyUp:T,type:"text",autoComplete:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:!1,"aria-autocomplete":"list",tabIndex:E??0,"aria-expanded":e,"data-testid":"searchbar-input","aria-controls":q,"aria-activedescendant":p,role:"combobox"}),n.jsx(Q,{svgElement:$,className:S.icon}),a&&n.jsx(F,{rounded:!0,size:"xs",variant:"tinted",className:S.clear,onClick:c,"data-testid":"search-button-clear","aria-label":l,children:n.jsx(B,{})})||e&&n.jsx(F,{size:"sm",variant:"ghost",className:S.dismiss,onClick:i,"data-testid":"search-button-close","aria-label":d,children:n.jsx(B,{})})]})},"SearchbarField"),{expect:u,userEvent:te,waitFor:f,within:H}=__STORYBOOK_MODULE_TEST__,Oe={title:"Layout/Searchbar",component:y,tags:["experimental"],parameters:{},args:{placeholder:"Search",name:"search",expanded:!0}},C={args:{expanded:!1}},v=t(()=>n.jsx(y,{name:"search",placeholder:"Søk i Altinn"}),"GlobalSearch"),_=t(()=>n.jsx(y,{name:"search",placeholder:"Søk i innboksen"}),"InboxSearch"),A=t(s=>{const[e,r]=x.useState(s.value||""),[a,o]=x.useState(s.expanded||!1),d=t(c=>{r(c.target.value)},"onChange"),l=t(()=>{r("")},"onClear"),b={items:[...[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(c=>({...c,groupId:"1",ariaLabel:`Søk etter ${e} i ${c.label}`,type:"scope"}))].map(c=>({...c,onClick:t(()=>{console.info("clicked",JSON.stringify(c))},"onClick")}))};return n.jsx(y,{...s,name:"search",placeholder:"Søk i innboksen",autocomplete:b,value:e,onChange:d,onClear:l,expanded:a,onFocus:t(()=>o(!0),"onFocus"),onClose:t(()=>{o(!1)},"onClose")})},"InboxScopes"),j=t(()=>n.jsx(G,{style:{minHeight:"176px"},children:n.jsx(A,{name:"search",expanded:!0,value:"skatt"})}),"InboxScopesExpanded"),O={args:{placeholder:"Søk i innboks",expanded:!0,autocomplete:{groups:{2:{title:"2 treff i innboks"}},items:[{as:"a",role:"scope",title:"alt i innboksen",id:"1a",groupId:"1",href:"#",label:"Alt i innboks",badge:{label:"2"}},{role:"scope",title:"alt i Altinn",id:"1b",groupId:"1",href:"#",label:"Alt i hele Altinn",badge:{label:"2"}},{id:"d1",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2024"},{id:"d2",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2025"}]}}},I=t(s=>{const[e,r]=x.useState(""),[a,o]=x.useState(!1),d=t(i=>{r(i.target.value)},"onChange"),l=t(()=>{r("")},"onClear"),m=[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(i=>({...i,groupId:"1",type:"scope"})),h=e?[{id:"d1",type:"dialog",title:"Skattemelding 2024",onClick:t(()=>alert("skatt24"),"onClick")},{id:"d2",type:"dialog",title:"Skattemelding 2025",onClick:t(()=>alert("skatt24"),"onClick")}].filter(i=>i.title.toLowerCase().includes((e??"").toLowerCase())).map(i=>({...i,type:"dialog",groupId:"2"})):[],b=[...m,...h].map((i,k)=>({...i,onClick:t(()=>{console.info("clicked item at index:"+k,JSON.stringify(i))},"onClick")})),c={groups:{2:{title:`${h.length} treff i innboksen`}},items:b};return n.jsx(y,{...s,autocomplete:c,value:e,onChange:d,onClear:l,expanded:a,onFocus:t(()=>o(!0),"onFocus"),onClose:t(()=>{o(!1)},"onClose")})},"ControlledState");I.play=async({canvasElement:s})=>{const e=H(s),r=te.setup(),a=e.getByRole("combobox");await r.type(a,"skatt"),await f(()=>u(a).toHaveAttribute("aria-expanded","true"));const o=e.getByRole("listbox");u(a).toHaveAttribute("aria-controls",o.id);const d=H(o).getAllByRole("option");u(d.length).toBeGreaterThanOrEqual(1),u(s.querySelectorAll('[role="menuitem"], [role="menu"]')).toHaveLength(0),await r.click(e.getByLabelText("Skattemelding 2024")),await f(()=>u(a).toHaveAttribute("aria-expanded","false")),await r.click(e.getByTestId("search-button-clear")),u(a).toHaveValue(""),await r.type(a,"skatt"),await f(()=>u(a).toHaveAttribute("aria-expanded","true")),await r.keyboard("{ArrowDown}{ArrowDown}"),await f(()=>{const l=s.querySelector('[data-active="true"]');u(l).toBeTruthy(),u(a).toHaveAttribute("aria-activedescendant",l?.id)}),await r.keyboard("{Enter}"),await f(()=>u(a).toHaveAttribute("aria-expanded","false"))};const Ee=["Default","GlobalSearch","InboxSearch","InboxScopes","InboxScopesExpanded","Expanded","ControlledState"];C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,..._.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
  const [q, setQ] = useState<string>(args.value || '');
  const [searchOpen, setSearchOpen] = useState<boolean>(args.expanded || false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  const scopes: AutocompleteItemProps[] = [{
    id: 'inbox',
    label: q ? () => {
      return <span>
                <mark>{q}</mark> i innboksen
              </span>;
    } : 'Alt i innboksen'
  }, {
    id: 'global',
    label: q ? () => {
      return <span>
                <mark>{q}</mark> i hele Altinn
              </span>;
    } : 'Alt i hele Altinn'
  }].map(item => {
    return {
      ...item,
      groupId: '1',
      ariaLabel: \`Søk etter \${q} i \${item.label}\`,
      type: 'scope'
    };
  });
  const autocompleteItems: AutocompleteItemProps[] = [...scopes].map(item => {
    return {
      ...item,
      onClick: () => {
        console.info('clicked', JSON.stringify(item));
      }
    };
  });
  const autocomplete: AutocompleteProps = {
    items: autocompleteItems
  };
  return <Searchbar {...args} name="search" placeholder="Søk i innboksen" autocomplete={autocomplete} value={q} onChange={onChange} onClear={onClear} expanded={searchOpen} onFocus={() => setSearchOpen(true)} onClose={() => {
    setSearchOpen(false);
  }} />;
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Section style={{
    minHeight: '176px'
  }}>
      <InboxScopes name="search" expanded value="skatt" />
    </Section>;
}`,...j.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Søk i innboks',
    expanded: true,
    autocomplete: {
      groups: {
        2: {
          title: '2 treff i innboks'
        }
      },
      items: [{
        as: 'a',
        role: 'scope',
        title: 'alt i innboksen',
        id: '1a',
        groupId: '1',
        href: '#',
        label: 'Alt i innboks',
        badge: {
          label: '2'
        }
      }, {
        role: 'scope',
        title: 'alt i Altinn',
        id: '1b',
        groupId: '1',
        href: '#',
        label: 'Alt i hele Altinn',
        badge: {
          label: '2'
        }
      }, {
        id: 'd1',
        role: 'dialog',
        groupId: '2',
        href: '#',
        title: 'Skattemelding 2024'
      }, {
        id: 'd2',
        role: 'dialog',
        groupId: '2',
        href: '#',
        title: 'Skattemelding 2025'
      }]
    }
  }
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
  const [q, setQ] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };
  const onClear = () => {
    setQ('');
  };
  const scopes: AutocompleteItemProps[] = [{
    id: 'inbox',
    label: q ? () => {
      return <span>
                <mark>{q}</mark> i innboksen
              </span>;
    } : 'Alt i innboksen'
  }, {
    id: 'global',
    label: q ? () => {
      return <span>
                <mark>{q}</mark> i hele Altinn
              </span>;
    } : 'Alt i hele Altinn'
  }].map(item => {
    return {
      ...item,
      groupId: '1',
      type: 'scope'
    };
  });
  const suggestions: AutocompleteItemProps[] = q ? [{
    id: 'd1',
    type: 'dialog',
    title: 'Skattemelding 2024',
    onClick: () => alert('skatt24')
  }, {
    id: 'd2',
    type: 'dialog',
    title: 'Skattemelding 2025',
    onClick: () => alert('skatt24')
  }].filter(item => item.title.toLowerCase().includes((q ?? '').toLowerCase())).map(item => {
    return {
      ...item,
      type: 'dialog',
      groupId: '2'
    };
  }) : [];
  const autocompleteItems: AutocompleteItemProps[] = [...scopes, ...suggestions].map((item, index) => {
    return {
      ...item,
      onClick: () => {
        console.info('clicked item at index:' + index, JSON.stringify(item));
      }
    };
  });
  const autocomplete: AutocompleteProps = {
    groups: {
      2: {
        title: \`\${suggestions.length} treff i innboksen\`
      }
    },
    items: autocompleteItems
  };
  return <Searchbar {...args} autocomplete={autocomplete} value={q} onChange={onChange} onClear={onClear} expanded={searchOpen} onFocus={() => setSearchOpen(true)} onClose={() => {
    setSearchOpen(false);
  }} />;
}`,...I.parameters?.docs?.source}}};export{I as ControlledState,C as Default,O as Expanded,v as GlobalSearch,A as InboxScopes,j as InboxScopesExpanded,_ as InboxSearch,Ee as __namedExportsOrder,Oe as default};
