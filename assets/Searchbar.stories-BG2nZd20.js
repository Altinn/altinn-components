import{j as n,r as f}from"./iframe-BNDruhPA.js";import{S as g}from"./SearchbarField-DETpAOo-.js";import{S as O}from"./Section-CcOIv3Qj.js";import"./preload-helper-PPVm8Dsz.js";import"./useIsDesktop-qJ8b0dW5.js";import"./index-JM42q3xD.js";import"./MagnifyingGlass-BEj5aS_0.js";import"./useId-28rL4Hsl.js";import"./XMark-vbUnhqfT.js";import"./Icon-Ch0vKaKK.js";import"./Skeleton-3vFplc_z.js";import"./Button-CaDKAluY.js";import"./button-Bu4lXR2T.js";import"./use-merge-refs-DHcrFN31.js";import"./lite-DaUVFjkg.js";import"./AutocompleteItem-Cw3TIONE.js";import"./MenuItem-Zvnz-i4w.js";import"./ItemMedia-C5U6F78e.js";import"./Avatar-Bc7K3VQ6.js";import"./AvatarGroup-CBYJn5rG.js";import"./Checkmark-BnLjHgWq.js";import"./Heading-C1Pb_LrU.js";import"./useHighlightedText-Bss46XCz.js";import"./ItemControls-nx23Lp4C.js";import"./ChevronRight-Bcu8s-U3.js";import"./Badge-e7-dfLSt.js";import"./Tooltip-BwDwCRyx.js";import"./floating-ui.dom-DCpi3RTt.js";import"./QueryLabel-l6CQGUJC.js";import"./Plus-BN_WRMVc.js";import"./useMenu-BrVLonhI.js";import"./MenuListItem-DJZ7kLfZ.js";import"./MenuListHeading-CJCU8c8j.js";import"./Flex-DdLGZodm.js";const{expect:l,userEvent:w,waitFor:m,within:y}=__STORYBOOK_MODULE_TEST__,le={title:"Layout/Searchbar",component:g,parameters:{},args:{placeholder:"Search",name:"search",expanded:!0}},h={args:{expanded:!1}},b=()=>n.jsx(g,{name:"search",placeholder:"Søk i Altinn"}),k=()=>n.jsx(g,{name:"search",placeholder:"Søk i innboksen"}),d=s=>{const[e,t]=f.useState(s.value||""),[a,i]=f.useState(s.expanded||!1),c=r=>{t(r.target.value)},p=()=>{t("")},C={items:[...[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(r=>({...r,groupId:"1",ariaLabel:`Søk etter ${e} i ${r.label}`,type:"scope"}))].map(r=>({...r,onClick:()=>{console.info("clicked",JSON.stringify(r))}}))};return n.jsx(g,{...s,name:"search",placeholder:"Søk i innboksen",autocomplete:C,value:e,onChange:c,onClear:p,expanded:a,onFocus:()=>i(!0),onClose:()=>{i(!1)}})},S=()=>n.jsx(O,{style:{minHeight:"176px"},children:n.jsx(d,{name:"search",expanded:!0,value:"skatt"})}),x={args:{placeholder:"Søk i innboks",expanded:!0,autocomplete:{groups:{2:{title:"2 treff i innboks"}},items:[{as:"a",role:"scope",title:"alt i innboksen",id:"1a",groupId:"1",href:"#",label:"Alt i innboks",badge:{label:"2"}},{role:"scope",title:"alt i Altinn",id:"1b",groupId:"1",href:"#",label:"Alt i hele Altinn",badge:{label:"2"}},{id:"d1",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2024"},{id:"d2",role:"dialog",groupId:"2",href:"#",title:"Skattemelding 2025"}]}}},u=s=>{const[e,t]=f.useState(""),[a,i]=f.useState(!1),c=o=>{t(o.target.value)},p=()=>{t("")},I=[{id:"inbox",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i innboksen"]}):"Alt i innboksen"},{id:"global",label:e?()=>n.jsxs("span",{children:[n.jsx("mark",{children:e})," i hele Altinn"]}):"Alt i hele Altinn"}].map(o=>({...o,groupId:"1",type:"scope"})),A=e?[{id:"d1",type:"dialog",title:"Skattemelding 2024",onClick:()=>alert("skatt24")},{id:"d2",type:"dialog",title:"Skattemelding 2025",onClick:()=>alert("skatt24")}].filter(o=>o.title.toLowerCase().includes((e??"").toLowerCase())).map(o=>({...o,type:"dialog",groupId:"2"})):[],C=[...I,...A].map((o,v)=>({...o,onClick:()=>{console.info("clicked item at index:"+v,JSON.stringify(o))}})),r={groups:{2:{title:`${A.length} treff i innboksen`}},items:C};return n.jsx(g,{...s,autocomplete:r,value:e,onChange:c,onClear:p,expanded:a,onFocus:()=>i(!0),onClose:()=>{i(!1)}})};u.play=async({canvasElement:s})=>{const e=y(s),t=w.setup(),a=e.getByRole("combobox");await t.type(a,"skatt"),await m(()=>l(a).toHaveAttribute("aria-expanded","true"));const i=e.getByRole("group"),c=y(i).getAllByRole("menuitem");l(c.length).toBeGreaterThanOrEqual(1),await t.click(e.getByLabelText("Skattemelding 2024")),await m(()=>l(a).toHaveAttribute("aria-expanded","false")),await t.click(e.getByTestId("search-button-clear")),l(a).toHaveValue(""),await t.type(a,"skatt"),await m(()=>l(a).toHaveAttribute("aria-expanded","true")),await t.keyboard("{ArrowDown}{ArrowDown}"),await m(()=>{const p=s.querySelector('[data-active="true"]');l(p).toBeTruthy()}),await t.keyboard("{Enter}"),await m(()=>l(a).toHaveAttribute("aria-expanded","false"))};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,...k.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...d.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`() => {
  return <Section style={{
    minHeight: '176px'
  }}>
      <InboxScopes name="search" expanded value="skatt" />
    </Section>;
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...u.parameters?.docs?.source}}};const ce=["Default","GlobalSearch","InboxSearch","InboxScopes","InboxScopesExpanded","Expanded","ControlledState"];export{u as ControlledState,h as Default,x as Expanded,b as GlobalSearch,d as InboxScopes,S as InboxScopesExpanded,k as InboxSearch,ce as __namedExportsOrder,le as default};
