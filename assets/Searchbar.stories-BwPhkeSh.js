import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./SearchbarField-yPXEUc8p.js";import{t as i}from"./Section-DYB-4Xyp.js";var a=e(t(),1),o=n(),{expect:s,userEvent:c,waitFor:l,within:u}=__STORYBOOK_MODULE_TEST__,d={title:`Layout/Searchbar`,component:r,parameters:{},args:{placeholder:`Search`,name:`search`,expanded:!0}},f={args:{expanded:!1}},p=()=>(0,o.jsx)(r,{name:`search`,placeholder:`Søk i Altinn`}),m=()=>(0,o.jsx)(r,{name:`search`,placeholder:`Søk i innboksen`}),h=e=>{let[t,n]=(0,a.useState)(e.value||``),[i,s]=(0,a.useState)(e.expanded||!1),c=e=>{n(e.target.value)},l=()=>{n(``)},u={items:[...[{id:`inbox`,label:t?()=>(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`mark`,{children:t}),` i innboksen`]}):`Alt i innboksen`},{id:`global`,label:t?()=>(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`mark`,{children:t}),` i hele Altinn`]}):`Alt i hele Altinn`}].map(e=>({...e,groupId:`1`,ariaLabel:`Søk etter ${t} i ${e.label}`,type:`scope`}))].map(e=>({...e,onClick:()=>{console.info(`clicked`,JSON.stringify(e))}}))};return(0,o.jsx)(r,{...e,name:`search`,placeholder:`Søk i innboksen`,autocomplete:u,value:t,onChange:c,onClear:l,expanded:i,onFocus:()=>s(!0),onClose:()=>{s(!1)}})},g=()=>(0,o.jsx)(i,{style:{minHeight:`176px`},children:(0,o.jsx)(h,{name:`search`,expanded:!0,value:`skatt`})}),_={args:{placeholder:`Søk i innboks`,expanded:!0,autocomplete:{groups:{2:{title:`2 treff i innboks`}},items:[{as:`a`,role:`scope`,title:`alt i innboksen`,id:`1a`,groupId:`1`,href:`#`,label:`Alt i innboks`,badge:{label:`2`}},{role:`scope`,title:`alt i Altinn`,id:`1b`,groupId:`1`,href:`#`,label:`Alt i hele Altinn`,badge:{label:`2`}},{id:`d1`,role:`dialog`,groupId:`2`,href:`#`,title:`Skattemelding 2024`},{id:`d2`,role:`dialog`,groupId:`2`,href:`#`,title:`Skattemelding 2025`}]}}},v=e=>{let[t,n]=(0,a.useState)(``),[i,s]=(0,a.useState)(!1),c=e=>{n(e.target.value)},l=()=>{n(``)},u=[{id:`inbox`,label:t?()=>(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`mark`,{children:t}),` i innboksen`]}):`Alt i innboksen`},{id:`global`,label:t?()=>(0,o.jsxs)(`span`,{children:[(0,o.jsx)(`mark`,{children:t}),` i hele Altinn`]}):`Alt i hele Altinn`}].map(e=>({...e,groupId:`1`,type:`scope`})),d=t?[{id:`d1`,type:`dialog`,title:`Skattemelding 2024`,onClick:()=>alert(`skatt24`)},{id:`d2`,type:`dialog`,title:`Skattemelding 2025`,onClick:()=>alert(`skatt24`)}].filter(e=>e.title.toLowerCase().includes((t??``).toLowerCase())).map(e=>({...e,type:`dialog`,groupId:`2`})):[],f=[...u,...d].map((e,t)=>({...e,onClick:()=>{console.info(`clicked item at index:`+t,JSON.stringify(e))}})),p={groups:{2:{title:`${d.length} treff i innboksen`}},items:f};return(0,o.jsx)(r,{...e,autocomplete:p,value:t,onChange:c,onClear:l,expanded:i,onFocus:()=>s(!0),onClose:()=>{s(!1)}})};v.play=async({canvasElement:e})=>{let t=u(e),n=c.setup(),r=t.getByRole(`combobox`);await n.type(r,`skatt`),await l(()=>s(r).toHaveAttribute(`aria-expanded`,`true`)),s(u(t.getByRole(`group`)).getAllByRole(`menuitem`).length).toBeGreaterThanOrEqual(1),await n.click(t.getByLabelText(`Skattemelding 2024`)),await l(()=>s(r).toHaveAttribute(`aria-expanded`,`false`)),await n.click(t.getByTestId(`search-button-clear`)),s(r).toHaveValue(``),await n.type(r,`skatt`),await l(()=>s(r).toHaveAttribute(`aria-expanded`,`true`)),await n.keyboard(`{ArrowDown}{ArrowDown}`),await l(()=>{s(e.querySelector(`[data-active="true"]`)).toBeTruthy()}),await n.keyboard(`{Enter}`),await l(()=>s(r).toHaveAttribute(`aria-expanded`,`false`))},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    expanded: false
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`() => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return <Section style={{
    minHeight: '176px'
  }}>
      <InboxScopes name="search" expanded value="skatt" />
    </Section>;
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: SearchbarProps) => {
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
}`,...v.parameters?.docs?.source}}};var y=[`Default`,`GlobalSearch`,`InboxSearch`,`InboxScopes`,`InboxScopesExpanded`,`Expanded`,`ControlledState`];export{v as ControlledState,f as Default,_ as Expanded,p as GlobalSearch,h as InboxScopes,g as InboxScopesExpanded,m as InboxSearch,y as __namedExportsOrder,d as default};