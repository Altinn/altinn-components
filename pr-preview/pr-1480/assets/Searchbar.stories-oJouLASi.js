"use client";var Q=Object.defineProperty;var t=(s,e)=>Q(s,"name",{value:e,configurable:!0});import{aa as x,ai as N,a7 as n,a2 as P,I as R,c as F,T as B}from"./iframe-r-PzxnFG.js";import{u as $}from"./useIsDesktop-Di7DAkKs.js";import{g as M}from"./commonTexts-CG1mkCQM.js";import{S as G}from"./MagnifyingGlass-7vnMkGiQ.js";import{A as J}from"./AutocompleteItem-CjO81eLQ.js";import{S as K}from"./Section-DH0F_yu4.js";import"./preload-helper-Cc2_yIPf.js";import"./MenuItem-Cmtt-77v.js";import"./CheckboxUncheckedIcon-CL3G4Xwm.js";import"./RadioUncheckedIcon-D0JrFl2l.js";import"./ItemMedia-BFk5syHA.js";import"./Avatar-Dzc1_6Ua.js";import"./AvatarGroup-D0dlHClc.js";import"./ItemLabel-DE7oETkr.js";import"./Heading-qFKPv3xm.js";import"./useHighlightedText-D1CHWYs6.js";import"./ItemControls-Di1aFGjk.js";import"./Badge-CQlPkK8J.js";import"./Tooltip-B_Gc3g4S.js";import"./ChevronRight-DoF3revo.js";import"./useMenu-BMl9Yb_c.js";import"./QueryLabel-DNW7hyld.js";import"./Plus-C3gc2Iai.js";import"./MenuListItem-IXmILE2K.js";import"./MenuListDivider-DjMXmyAN.js";import"./Flex-DRLqoZbu.js";const y=t(({className:s,autocomplete:e,expanded:r=!1,onClose:a,tabIndex:o,useGlobalHeader:d=!1,...l})=>{const[m,h]=x.useState(!1),[g,c]=x.useState(void 0),{previousId:i,openId:S}=N(),q=$(),w=t(p=>{const b=p.target?.attributes?.getNamedItem("data-testid")?.value;p?.relatedTarget?.closest('[data-autocomplete="true"]')||p.relatedTarget===null||(b==="search-button-clear"||b==="search-button-close"||b==="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="searchbar-input"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-clear"&&p.relatedTarget?.getAttribute("data-testid")!=="search-button-close"&&p.relatedTarget?.getAttribute("data-testid")!=="autocomplete-list")&&(q||i!=="menu"?a?.():S("menu"))},"onBlurCapture");return n.jsxs(X,{className:s,expanded:r,autocomplete:!!e,onBlurCapture:w,useGlobalHeader:d,children:[n.jsx(ne,{...l,expanded:r,onClose:a,tabIndex:o,...e&&{controlsId:"searchbar-autocomplete",activeDescendantId:g},onFocus:t(p=>{l?.onFocus?.(p),m||h(!0)},"onFocus"),onBlur:t(p=>{l?.onBlur?.(p),m&&h(!1)},"onBlur")}),e&&n.jsx(J,{...e,expanded:r,keyboardEvents:m,onSelect:a,id:"searchbar-autocomplete",onActiveItemIdChange:c})]})},"Searchbar"),z="_searchbar_1lexx_1",U="_searchbarExpanded_1lexx_14",V="_searchbarLocal_1lexx_22",T={searchbar:z,searchbarExpanded:U,searchbarLocal:V},X=t(({className:s,children:e,expanded:r=!1,onBlurCapture:a,autocomplete:o=!1,useGlobalHeader:d=!1})=>{const l=P(T.searchbar,s,r&&T.searchbarExpanded,d&&T.searchbarLocal);return n.jsx("div",{className:l,"data-autocomplete":o,onBlurCapture:a,children:e})},"SearchbarBase"),Y="_field_uxhly_1",W="_icon_uxhly_10",Z="_input_uxhly_17",ee="_clear_uxhly_45",te="_dismiss_uxhly_62",k={field:Y,icon:W,input:Z,clear:ee,dismiss:te},ne=t(({className:s,expanded:e,name:r="q",value:a,placeholder:o,closeButtonAltText:d,clearButtonAltText:l,onFocus:m,onBlur:h,onChange:g,onClear:c,onClose:i,onEnter:S,tabIndex:q,controlsId:w,activeDescendantId:p})=>{const b=x.useRef(null),C=M(N().languageCode),D=t(L=>{L.key==="Escape"&&b.current?.blur(),L.key==="Enter"&&(b.current?.blur(),S?.())},"handleOnKeyUp");return n.jsxs("div",{className:P(k.field,s),children:[n.jsx("input",{ref:b,onFocus:m,onBlur:h,name:r,value:a,onChange:g,placeholder:o??C.search,className:k.input,onKeyUp:D,type:"text",autoComplete:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:!1,"aria-autocomplete":"list",tabIndex:q??0,"aria-expanded":e,"data-testid":"searchbar-input","aria-controls":w,"aria-activedescendant":p,role:"combobox"}),n.jsx(R,{svgElement:G,className:k.icon}),a&&n.jsx(F,{rounded:!0,size:"xs",variant:"tinted",className:k.clear,onClick:c,"data-testid":"search-button-clear","aria-label":l??C.clearSearch,children:n.jsx(B,{})})||e&&n.jsx(F,{size:"sm",variant:"ghost",className:k.dismiss,onClick:i,"data-testid":"search-button-close","aria-label":d??C.closeSearch,children:n.jsx(B,{})})]})},"SearchbarField"),{expect:u,userEvent:ae,waitFor:f,within:H}=__STORYBOOK_MODULE_TEST__,we={title:"Layout/Searchbar",component:y,tags:["experimental"],parameters:{},args:{placeholder:"Search",name:"search",expanded:!0}},v={args:{expanded:!1}},_=t(()=>n.jsx(y,{name:"search",placeholder:"Søk i Altinn"}),"GlobalSearch"),j=t(()=>n.jsx(y,{name:"search",placeholder:"Søk i innboksen"}),"InboxSearch"),A=t(s=>{const[e,r]=x.useState(s.value||""),[a,o]=x.useState(s.expanded||!1),d=t(c=>{r(c.target.value)},"onChange"),l=t(()=>{r("")},"onClear"),g={items:[...[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(c=>({...c,groupId:"1",ariaLabel:`Søk etter ${e} i ${c.label}`,type:"scope"}))].map(c=>({...c,onClick:t(()=>{console.info("clicked",JSON.stringify(c))},"onClick")}))};return n.jsx(y,{...s,name:"search",placeholder:"Søk i innboksen",autocomplete:g,value:e,onChange:d,onClear:l,expanded:a,onFocus:t(()=>o(!0),"onFocus"),onClose:t(()=>{o(!1)},"onClose")})},"InboxScopes"),O=t(()=>n.jsx(K,{style:{minHeight:"176px"},children:n.jsx(A,{name:"search",expanded:!0,value:"skatt"})}),"InboxScopesExpanded"),E={args:{placeholder:"Søk i innboks",expanded:!0,autocomplete:{groups:{2:{title:"2 treff i innboks"}},items:[{as:"a",role:"scope",title:"alt i innboksen",id:"1a",groupId:"1",href:"#",label:"Alt i innboks",badge:{label:"2"}},{role:"scope",title:"alt i Altinn",id:"1b",groupId:"1",href:"#",label:"Alt i hele Altinn",badge:{label:"2"}},{id:"d1",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2024"},{id:"d2",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2025"}]}}},I=t(s=>{const[e,r]=x.useState(""),[a,o]=x.useState(!1),d=t(i=>{r(i.target.value)},"onChange"),l=t(()=>{r("")},"onClear"),m=[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(i=>({...i,groupId:"1",type:"scope"})),h=e?[{id:"d1",type:"dialog",title:"Skattemelding 2024",onClick:t(()=>alert("skatt24"),"onClick")},{id:"d2",type:"dialog",title:"Skattemelding 2025",onClick:t(()=>alert("skatt24"),"onClick")}].filter(i=>i.title.toLowerCase().includes((e??"").toLowerCase())).map(i=>({...i,type:"dialog",groupId:"2"})):[],g=[...m,...h].map((i,S)=>({...i,onClick:t(()=>{console.info("clicked item at index:"+S,JSON.stringify(i))},"onClick")})),c={groups:{2:{title:`${h.length} treff i innboksen`}},items:g};return n.jsx(y,{...s,autocomplete:c,value:e,onChange:d,onClear:l,expanded:a,onFocus:t(()=>o(!0),"onFocus"),onClose:t(()=>{o(!1)},"onClose")})},"ControlledState");I.play=async({canvasElement:s})=>{const e=H(s),r=ae.setup(),a=e.getByRole("combobox");await r.type(a,"skatt"),await f(()=>u(a).toHaveAttribute("aria-expanded","true"));const o=e.getByRole("listbox");u(a).toHaveAttribute("aria-controls",o.id);const d=H(o).getAllByRole("option");u(d.length).toBeGreaterThanOrEqual(1),u(s.querySelectorAll('[role="menuitem"], [role="menu"]')).toHaveLength(0),await r.click(e.getByLabelText("Skattemelding 2024")),await f(()=>u(a).toHaveAttribute("aria-expanded","false")),await r.click(e.getByTestId("search-button-clear")),u(a).toHaveValue(""),await r.type(a,"skatt"),await f(()=>u(a).toHaveAttribute("aria-expanded","true")),await r.keyboard("{ArrowDown}{ArrowDown}"),await f(()=>{const l=s.querySelector('[data-active="true"]');u(l).toBeTruthy(),u(a).toHaveAttribute("aria-activedescendant",l?.id)}),await r.keyboard("{Enter}"),await f(()=>u(a).toHaveAttribute("aria-expanded","false"))};const Te=["Default","GlobalSearch","InboxSearch","InboxScopes","InboxScopesExpanded","Expanded","ControlledState"];v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,..._.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,...j.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...A.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`() => {
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
}`,...E.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...I.parameters?.docs?.source}}};export{I as ControlledState,v as Default,E as Expanded,_ as GlobalSearch,A as InboxScopes,O as InboxScopesExpanded,j as InboxSearch,Te as __namedExportsOrder,we as default};
