"use client";var N=Object.defineProperty;var t=(s,e)=>N(s,"name",{value:e,configurable:!0});import{a9 as g,ah as P,a6 as n,a2 as B,I as Q,c as T,T as F}from"./iframe-DS_59AwM.js";import{u as D}from"./useIsDesktop-BLNCbIMG.js";import{S as R}from"./MagnifyingGlass-l1_f6IJo.js";import{A as $}from"./AutocompleteItem-BurkbwhI.js";import{S as M}from"./Section-C50awZDU.js";import"./preload-helper-Cc2_yIPf.js";import"./useMenu-30LDsNSn.js";import"./MenuItem-Y-AEUpRl.js";import"./CheckboxUncheckedIcon-C7ZL4zpD.js";import"./RadioUncheckedIcon-B7iKOFAO.js";import"./ItemMedia-CcjWIfuL.js";import"./Avatar-DsQCNXZF.js";import"./AvatarGroup-yHV_WJhD.js";import"./ItemLabel-DXVwsqWf.js";import"./Heading-BZMLDowx.js";import"./useHighlightedText-Ba9mKwdy.js";import"./ItemControls-C2ZClT3B.js";import"./Badge-CF5PgN9h.js";import"./Tooltip-BBICM8wr.js";import"./ChevronRight-C7PJPgHr.js";import"./QueryLabel-C07oFlTP.js";import"./Plus-Wv8vH7eI.js";import"./MenuListItem-DwlAJFdA.js";import"./MenuListDivider-CucqnGV5.js";import"./Flex-kHR-J2An.js";const I=t(({className:s,autocomplete:e,expanded:a=!1,onClose:r,tabIndex:l,useGlobalHeader:d=!1,...i})=>{const[u,m]=g.useState(!1),{previousId:h,openId:c}=P(),o=D(),x=t(p=>{const k=p.target?.attributes?.getNamedItem("data-testid")?.value;p?.relatedTarget?.closest('[data-autocomplete="true"]')||p.relatedTarget===null||(k==="search-button-clear"||k==="search-button-close"||k==="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-clear"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-close"&&p.relatedTarget?.getAttribute("data-testid")!=="autocomplete-list")&&(o||h!=="menu"?r?.():c("menu"))},"onBlurCapture");return n.jsxs(z,{className:s,expanded:a,autocomplete:!!e,onBlurCapture:x,useGlobalHeader:d,children:[n.jsx(Z,{...i,expanded:a,onClose:r,tabIndex:l,...e&&{controlsId:"searchbar-autocomplete"},onFocus:t(p=>{i?.onFocus?.(p),u||m(!0)},"onFocus"),onBlur:t(p=>{i?.onBlur?.(p),u&&m(!1)},"onBlur")}),e&&n.jsx($,{...e,expanded:a,keyboardEvents:u,onSelect:r,id:"searchbar-autocomplete"})]})},"Searchbar"),G="_searchbar_1lexx_1",J="_searchbarExpanded_1lexx_14",K="_searchbarLocal_1lexx_22",w={searchbar:G,searchbarExpanded:J,searchbarLocal:K},z=t(({className:s,children:e,expanded:a=!1,onBlurCapture:r,autocomplete:l=!1,useGlobalHeader:d=!1})=>{const i=B(w.searchbar,s,a&&w.searchbarExpanded,d&&w.searchbarLocal);return n.jsx("div",{className:i,"data-autocomplete":l,onBlurCapture:r,children:e})},"SearchbarBase"),U="_field_uxhly_1",V="_icon_uxhly_10",X="_input_uxhly_17",Y="_clear_uxhly_45",W="_dismiss_uxhly_62",S={field:U,icon:V,input:X,clear:Y,dismiss:W},Z=t(({className:s,expanded:e,name:a="q",value:r,placeholder:l="Search",closeButtonAltText:d="Close search",clearButtonAltText:i="Clear search",onFocus:u,onBlur:m,onChange:h,onClear:c,onClose:o,onEnter:x,tabIndex:p,controlsId:k})=>{const C=g.useRef(null),H=t(q=>{q.key==="Escape"&&C.current?.blur(),q.key==="Enter"&&(C.current?.blur(),x?.())},"handleOnKeyUp");return n.jsxs("div",{className:B(S.field,s),children:[n.jsx("input",{ref:C,onFocus:u,onBlur:m,name:a,value:r,onChange:h,placeholder:l,className:S.input,onKeyUp:H,type:"text",autoComplete:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:!1,"aria-autocomplete":"list",tabIndex:p??0,"aria-expanded":e,"data-testid":"searchbar-input","aria-controls":k,role:"combobox"}),n.jsx(Q,{svgElement:R,className:S.icon}),r&&n.jsx(T,{rounded:!0,size:"xs",variant:"tinted",className:S.clear,onClick:c,"data-testid":"search-button-clear","aria-label":i,children:n.jsx(F,{"aria-hidden":!0})})||e&&n.jsx(T,{size:"sm",variant:"ghost",className:S.dismiss,onClick:o,"data-testid":"search-button-close","aria-label":d,children:n.jsx(F,{"aria-hidden":!0})})]})},"SearchbarField"),{expect:b,userEvent:ee,waitFor:f,within:L}=__STORYBOOK_MODULE_TEST__,je={title:"Layout/Searchbar",component:I,tags:["experimental"],parameters:{},args:{placeholder:"Search",name:"search",expanded:!0}},v={args:{expanded:!1}},_=t(()=>n.jsx(I,{name:"search",placeholder:"Søk i Altinn"}),"GlobalSearch"),j=t(()=>n.jsx(I,{name:"search",placeholder:"Søk i innboksen"}),"InboxSearch"),y=t(s=>{const[e,a]=g.useState(s.value||""),[r,l]=g.useState(s.expanded||!1),d=t(c=>{a(c.target.value)},"onChange"),i=t(()=>{a("")},"onClear"),h={items:[...[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(c=>({...c,groupId:"1",ariaLabel:`Søk etter ${e} i ${c.label}`,type:"scope"}))].map(c=>({...c,onClick:t(()=>{console.info("clicked",JSON.stringify(c))},"onClick")}))};return n.jsx(I,{...s,name:"search",placeholder:"Søk i innboksen",autocomplete:h,value:e,onChange:d,onClear:i,expanded:r,onFocus:t(()=>l(!0),"onFocus"),onClose:t(()=>{l(!1)},"onClose")})},"InboxScopes"),O=t(()=>n.jsx(M,{style:{minHeight:"176px"},children:n.jsx(y,{name:"search",expanded:!0,value:"skatt"})}),"InboxScopesExpanded"),E={args:{placeholder:"Søk i innboks",expanded:!0,autocomplete:{groups:{2:{title:"2 treff i innboks"}},items:[{as:"a",role:"scope",title:"alt i innboksen",id:"1a",groupId:"1",href:"#",label:"Alt i innboks",badge:{label:"2"}},{role:"scope",title:"alt i Altinn",id:"1b",groupId:"1",href:"#",label:"Alt i hele Altinn",badge:{label:"2"}},{id:"d1",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2024"},{id:"d2",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2025"}]}}},A=t(s=>{const[e,a]=g.useState(""),[r,l]=g.useState(!1),d=t(o=>{a(o.target.value)},"onChange"),i=t(()=>{a("")},"onClear"),u=[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(o=>({...o,groupId:"1",type:"scope"})),m=e?[{id:"d1",type:"dialog",title:"Skattemelding 2024",onClick:t(()=>alert("skatt24"),"onClick")},{id:"d2",type:"dialog",title:"Skattemelding 2025",onClick:t(()=>alert("skatt24"),"onClick")}].filter(o=>o.title.toLowerCase().includes((e??"").toLowerCase())).map(o=>({...o,type:"dialog",groupId:"2"})):[],h=[...u,...m].map((o,x)=>({...o,onClick:t(()=>{console.info("clicked item at index:"+x,JSON.stringify(o))},"onClick")})),c={groups:{2:{title:`${m.length} treff i innboksen`}},items:h};return n.jsx(I,{...s,autocomplete:c,value:e,onChange:d,onClear:i,expanded:r,onFocus:t(()=>l(!0),"onFocus"),onClose:t(()=>{l(!1)},"onClose")})},"ControlledState");A.play=async({canvasElement:s})=>{const e=L(s),a=ee.setup(),r=e.getByRole("combobox");await a.type(r,"skatt"),await f(()=>b(r).toHaveAttribute("aria-expanded","true"));const l=e.getByRole("group"),d=L(l).getAllByRole("menuitem");b(d.length).toBeGreaterThanOrEqual(1),await a.click(e.getByLabelText("Skattemelding 2024")),await f(()=>b(r).toHaveAttribute("aria-expanded","false")),await a.click(e.getByTestId("search-button-clear")),b(r).toHaveValue(""),await a.type(r,"skatt"),await f(()=>b(r).toHaveAttribute("aria-expanded","true")),await a.keyboard("{ArrowDown}{ArrowDown}"),await f(()=>{const i=s.querySelector('[data-active="true"]');b(i).toBeTruthy()}),await a.keyboard("{Enter}"),await f(()=>b(r).toHaveAttribute("aria-expanded","false"))};const Oe=["Default","GlobalSearch","InboxSearch","InboxScopes","InboxScopesExpanded","Expanded","ControlledState"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...y.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
  return <Section style={{
    minHeight: '176px'
  }}>
      <InboxScopes name="search" expanded value="skatt" />
    </Section>;
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...A.parameters?.docs?.source}}};export{A as ControlledState,v as Default,E as Expanded,_ as GlobalSearch,y as InboxScopes,O as InboxScopesExpanded,j as InboxSearch,Oe as __namedExportsOrder,je as default};
