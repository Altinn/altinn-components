"use client";import{r as b,u as N,j as t}from"./iframe-0tjTS8nX.js";import{u as P}from"./useIsDesktop-BVM8UbJd.js";import{c as L}from"./index-BHkRJabC.js";import{S as F}from"./MagnifyingGlass-Djl9xGro.js";import{S as q}from"./XMark-C6HGzv3s.js";import{I as Q}from"./Icon-CEoRGh9j.js";import{B as T}from"./Button-CyTdDQsP.js";import{A as D}from"./AutocompleteItem-qeySugCD.js";import{S as R}from"./Section-CVxfq1Zs.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DNFZveVv.js";import"./Skeleton-CiSYBb75.js";import"./button-Cld0y5Q3.js";import"./use-merge-refs-C-O5ch3n.js";import"./lite-DaUVFjkg.js";import"./MenuItem-Dq38BSWn.js";import"./ItemMedia-DYrXvlN2.js";import"./Avatar-DBihd_YJ.js";import"./AvatarGroup-Cy536atj.js";import"./Checkmark-DcFVdWi8.js";import"./Heading-KoSbgrW3.js";import"./useHighlightedText-D9Q4aeek.js";import"./ItemControls-C9C9Xohr.js";import"./ChevronRight-DKBz6hgL.js";import"./Badge-CK8WzVFg.js";import"./Tooltip-B5-oR0O6.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-mbq1c_hI.js";import"./Plus-pc4KN7SW.js";import"./useMenu-DGQxaY-L.js";import"./MenuListItem-B43Ld8oT.js";import"./MenuListHeading-BfXt7Oa1.js";import"./Flex-BjLBa1JB.js";const A=({className:r,autocomplete:e,expanded:n=!1,onClose:a,tabIndex:s,useGlobalHeader:p=!1,...l})=>{const[u,d]=b.useState(!1),{previousId:m,openId:i}=N(),o=P(),g=c=>{const x=c.target?.attributes?.getNamedItem("data-testid")?.value;c?.relatedTarget?.closest('[data-autocomplete="true"]')||c.relatedTarget===null||(x==="search-button-clear"||x==="search-button-close"||x==="searchbar-input"&&c.relatedTarget?.getAttribute("data-testid")!=="searchbar-input"&&c.relatedTarget?.getAttribute("data-testid")!=="search-button-clear"&&c.relatedTarget?.getAttribute("data-testid")!=="search-button-close"&&c.relatedTarget?.getAttribute("data-testid")!=="autocomplete-list")&&(o||m!=="menu"?a?.():i("menu"))};return t.jsxs(J,{className:r,expanded:n,autocomplete:!!e,onBlurCapture:g,useGlobalHeader:p,children:[t.jsx(Y,{...l,expanded:n,onClose:a,tabIndex:s,...e&&{controlsId:"searchbar-autocomplete"},onFocus:c=>{l?.onFocus?.(c),u||d(!0)},onBlur:c=>{l?.onBlur?.(c),u&&d(!1)}}),e&&t.jsx(D,{...e,expanded:n,keyboardEvents:u,onSelect:a,id:"searchbar-autocomplete"})]})},$="_searchbar_1lexx_1",M="_searchbarExpanded_1lexx_14",G="_searchbarLocal_1lexx_22",E={searchbar:$,searchbarExpanded:M,searchbarLocal:G},J=({className:r,children:e,expanded:n=!1,onBlurCapture:a,autocomplete:s=!1,useGlobalHeader:p=!1})=>{const l=L(E.searchbar,r,n&&E.searchbarExpanded,p&&E.searchbarLocal);return t.jsx("div",{className:l,"data-autocomplete":s,onBlurCapture:a,children:e})},K="_field_uxhly_1",z="_icon_uxhly_10",U="_input_uxhly_17",V="_clear_uxhly_45",X="_dismiss_uxhly_62",k={field:K,icon:z,input:U,clear:V,dismiss:X},Y=({className:r,expanded:e,name:n="q",value:a,placeholder:s="Search",closeButtonAltText:p="Close search",clearButtonAltText:l="Clear search",onFocus:u,onBlur:d,onChange:m,onClear:i,onClose:o,onEnter:g,tabIndex:c,controlsId:x})=>{const I=b.useRef(null),H=w=>{w.key==="Escape"&&I.current?.blur(),w.key==="Enter"&&(I.current?.blur(),g?.())};return t.jsxs("div",{className:L(k.field,r),children:[t.jsx("input",{ref:I,onFocus:u,onBlur:d,name:n,value:a,onChange:m,placeholder:s,className:k.input,onKeyUp:H,type:"text",autoComplete:"off",autoCapitalize:"off",enterKeyHint:"search",spellCheck:!1,"aria-autocomplete":"list",tabIndex:c??0,"aria-expanded":e,"data-testid":"searchbar-input","aria-controls":x,role:"combobox"}),t.jsx(Q,{svgElement:F,className:k.icon}),a&&t.jsx(T,{rounded:!0,size:"xs",variant:"tinted",className:k.clear,onClick:i,"data-testid":"search-button-clear","aria-label":l,children:t.jsx(q,{})})||e&&t.jsx(T,{size:"sm",variant:"ghost",className:k.dismiss,onClick:o,"data-testid":"search-button-close","aria-label":p,children:t.jsx(q,{})})]})},{expect:h,userEvent:W,waitFor:S,within:B}=__STORYBOOK_MODULE_TEST__,Te={title:"Layout/Searchbar",component:A,parameters:{},args:{placeholder:"Search",name:"search",expanded:!0}},C={args:{expanded:!1}},v=()=>t.jsx(A,{name:"search",placeholder:"Søk i Altinn"}),_=()=>t.jsx(A,{name:"search",placeholder:"Søk i innboksen"}),f=r=>{const[e,n]=b.useState(r.value||""),[a,s]=b.useState(r.expanded||!1),p=i=>{n(i.target.value)},l=()=>{n("")},m={items:[...[{id:"inbox",label:e?()=>t.jsxs("span",{children:[t.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>t.jsxs("span",{children:[t.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(i=>({...i,groupId:"1",ariaLabel:`Søk etter ${e} i ${i.label}`,type:"scope"}))].map(i=>({...i,onClick:()=>{console.info("clicked",JSON.stringify(i))}}))};return t.jsx(A,{...r,name:"search",placeholder:"Søk i innboksen",autocomplete:m,value:e,onChange:p,onClear:l,expanded:a,onFocus:()=>s(!0),onClose:()=>{s(!1)}})},j=()=>t.jsx(R,{style:{minHeight:"176px"},children:t.jsx(f,{name:"search",expanded:!0,value:"skatt"})}),O={args:{placeholder:"Søk i innboks",expanded:!0,autocomplete:{groups:{2:{title:"2 treff i innboks"}},items:[{as:"a",role:"scope",title:"alt i innboksen",id:"1a",groupId:"1",href:"#",label:"Alt i innboks",badge:{label:"2"}},{role:"scope",title:"alt i Altinn",id:"1b",groupId:"1",href:"#",label:"Alt i hele Altinn",badge:{label:"2"}},{id:"d1",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2024"},{id:"d2",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2025"}]}}},y=r=>{const[e,n]=b.useState(""),[a,s]=b.useState(!1),p=o=>{n(o.target.value)},l=()=>{n("")},u=[{id:"inbox",label:e?()=>t.jsxs("span",{children:[t.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>t.jsxs("span",{children:[t.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(o=>({...o,groupId:"1",type:"scope"})),d=e?[{id:"d1",type:"dialog",title:"Skattemelding 2024",onClick:()=>alert("skatt24")},{id:"d2",type:"dialog",title:"Skattemelding 2025",onClick:()=>alert("skatt24")}].filter(o=>o.title.toLowerCase().includes((e??"").toLowerCase())).map(o=>({...o,type:"dialog",groupId:"2"})):[],m=[...u,...d].map((o,g)=>({...o,onClick:()=>{console.info("clicked item at index:"+g,JSON.stringify(o))}})),i={groups:{2:{title:`${d.length} treff i innboksen`}},items:m};return t.jsx(A,{...r,autocomplete:i,value:e,onChange:p,onClear:l,expanded:a,onFocus:()=>s(!0),onClose:()=>{s(!1)}})};y.play=async({canvasElement:r})=>{const e=B(r),n=W.setup(),a=e.getByRole("combobox");await n.type(a,"skatt"),await S(()=>h(a).toHaveAttribute("aria-expanded","true"));const s=e.getByRole("group"),p=B(s).getAllByRole("menuitem");h(p.length).toBeGreaterThanOrEqual(1),await n.click(e.getByLabelText("Skattemelding 2024")),await S(()=>h(a).toHaveAttribute("aria-expanded","false")),await n.click(e.getByTestId("search-button-clear")),h(a).toHaveValue(""),await n.type(a,"skatt"),await S(()=>h(a).toHaveAttribute("aria-expanded","true")),await n.keyboard("{ArrowDown}{ArrowDown}"),await S(()=>{const l=r.querySelector('[data-active="true"]');h(l).toBeTruthy()}),await n.keyboard("{Enter}"),await S(()=>h(a).toHaveAttribute("aria-expanded","false"))};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,..._.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`() => {
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
}`,...O.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...y.parameters?.docs?.source}}};const Be=["Default","GlobalSearch","InboxSearch","InboxScopes","InboxScopesExpanded","Expanded","ControlledState"];export{y as ControlledState,C as Default,O as Expanded,v as GlobalSearch,f as InboxScopes,j as InboxScopesExpanded,_ as InboxSearch,Be as __namedExportsOrder,Te as default};
