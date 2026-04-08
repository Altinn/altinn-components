import{i as e}from"./chunk-DseTPa7n.js";import{t}from"./react-CpyhhMkF.js";import{t as n}from"./jsx-runtime-DwqL_Y-t.js";import{t as r}from"./Archive-D_VKIJvC.js";import{t as i}from"./ArrowRedo-DzBkTQZy.js";import{t as a}from"./Checkmark-BXKW_xao.js";import{t as o}from"./EyeClosed-D72Zg8g-.js";import{n as s}from"./useFloatingDropdown-Zc1UhNVF.js";import{t as c}from"./Trash-CA--6OQp.js";import{t as l}from"./XMark-CDYpubJK.js";import{r as u}from"./RootProvider-CwL6faQJ.js";import{t as d}from"./Heading-CJB15i5Q.js";import{s as f}from"./ListItem-DAJg57C2.js";import{t as p}from"./Button-L6T5IVdq.js";import{t as m}from"./ButtonIcon-umpM5DWb.js";import{t as h}from"./ButtonLabel-CHurY4s1.js";import{t as g}from"./ButtonGroup-qEf-oFo1.js";import{t as _}from"./ContextMenu-BispZrd8.js";import{t as v}from"./DialogListGroup--vVbngCh.js";import{t as y}from"./Layout-oRerHG_B.js";import{t as b}from"./Toolbar-CmziBAS7.js";import{t as x}from"./PageBase-C-dLvRYT.js";var S={header:`_header_3oi77_1`,container:`_container_3oi77_22`,summary:`_summary_3oi77_40`,title:`_title_3oi77_45`,icon:`_icon_3oi77_51`,dismissButton:`_dismissButton_3oi77_59`,options:`_options_3oi77_64`},C={button:`_button_1lnve_2`,label:`_label_1lnve_11`},w=n(),T=({icon:e,label:t,onClick:n})=>(0,w.jsxs)(p,{className:C.button,onClick:n,children:[(0,w.jsx)(m,{className:C.icon,icon:e}),(0,w.jsx)(h,{className:C.label,size:`sm`,children:t})]}),E=e(t(),1),D=({color:e=`company`,hidden:t=!1,title:n,dismissable:r=!0,dismissIconAltText:i=`Close`,options:a,onDismiss:o})=>{let s=(0,E.useRef)(null),c=(0,E.useRef)(t);return u(()=>{r&&o?.()}),(0,E.useEffect)(()=>{c.current&&!t&&(s.current?.querySelector(`button`))?.focus(),c.current=t},[t]),(0,w.jsx)(`header`,{ref:s,className:S.header,"aria-hidden":t,inert:t||void 0,"data-color":e,children:(0,w.jsxs)(`div`,{className:S.container,children:[(0,w.jsx)(d,{size:`md`,className:S.title,children:n}),(0,w.jsxs)(g,{children:[(0,w.jsx)(`div`,{className:S.options,children:a?.map((e,t)=>(0,E.createElement)(T,{...e,key:t}))}),r&&(0,w.jsxs)(p,{onClick:o,className:S.dismissButton,"aria-label":i,children:[(0,w.jsx)(l,{style:{fontSize:`1.5em`}}),(0,w.jsx)(`span`,{"data-size":`sm`,children:`Avbryt`})]})]})]})})},O={footer:`_footer_vl7dx_1`,actions:`_actions_vl7dx_28`},k=({hidden:e=!1,color:t=`company`,actions:n})=>(0,w.jsx)(`footer`,{className:O.footer,"data-color":t,"aria-hidden":e,inert:e||void 0,children:(0,w.jsx)(`div`,{className:O.actions,children:n?.map((e,t)=>(0,E.createElement)(T,{...e,key:t}))})}),A={title:`Bulk/Demo`,tags:[`beta`],parameters:{layout:`fullscreen`},args:{}},j=({defaultBulkIds:e=[]})=>{let{layout:t,toolbar:n,results:l}=s({}),u=[{icon:i,label:`Del og gi tilgang`},{icon:o,label:`Marker som lest`},{icon:r,label:`Flytt til arkiv`},{icon:c,label:`Flytt til papirkurv`}],[p,m]=(0,E.useState)(e),h=p.length>0,g=e=>{p.includes(e)?m(p.filter(t=>t!==e)):m([...p,e])},S=l?.items?.map((e,n)=>{let s=`item-`+n,l={items:[{groupId:`1`,icon:a,label:`Velg flere ...`,onClick:()=>g(s)},{groupId:`2`,icon:i,label:`Del og gi tilgang`},{groupId:`2`,icon:o,label:`Marker som lest`},{groupId:`3`,icon:r,label:`Flytt til arkiv`},{groupId:`3`,icon:c,label:`Flytt til papirkurv`}]};return{...e,id:s,as:`a`,href:`#`,color:t?.color,selectable:h,tooltips:{status:`Dette er dialogens status`,sent:`Antall meldinger sendt`,received:`Antall meldinger mottatt`,seenBy:`Hvem har sett dialogen?`},tabIndex:h?1:void 0,selected:p?.includes(s),onClick:()=>h?g(s):alert(`Open dialog`),controls:h?(0,w.jsx)(f,{checked:p?.includes(s),onClick:()=>g(s)}):(0,w.jsx)(_,{...l})}}),C=()=>{m(S?.map(e=>e.id)||[])},T=()=>{m([])},O={...t?.sidebar,hidden:h},A=[{icon:a,label:`Velg alle`,onClick:C}],j=n?.accountMenu,M=j?.items?.find(e=>e.selected)||j?.items[0],N=t?.breadcrumbs?.items||[],P=[...N,{label:`Velg flere`,href:`/inbox`}];return(0,w.jsx)(y,{...t,breadcrumbs:{...t?.breadcrumbs,items:h?P:N},sidebar:O,useGlobalHeader:!0,children:(0,w.jsxs)(x,{children:[(0,w.jsx)(D,{hidden:!h,title:p?.length+` valgt`,options:A,dismissable:!0,onDismiss:T}),(0,w.jsx)(d,{size:`xl`,children:`Innboks`}),(0,w.jsx)(b,{...n,search:{value:`Skatt`},disabled:h,accountMenu:{...j,label:M?.name}}),l&&(0,w.jsx)(v,{items:S,groups:l?.groups}),(0,w.jsx)(k,{hidden:!h,actions:u})]})})},M=()=>(0,w.jsx)(j,{defaultBulkIds:[`item-0`,`item-1`]});j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`({
  defaultBulkIds = []
}: {
  defaultBulkIds?: string[];
}) => {
  const {
    layout,
    toolbar,
    results
  } = useInbox({});
  const bulkActions = [{
    icon: ArrowRedoIcon,
    label: 'Del og gi tilgang'
  }, {
    icon: EyeClosedIcon,
    label: 'Marker som lest'
  }, {
    icon: ArchiveIcon,
    label: 'Flytt til arkiv'
  }, {
    icon: TrashIcon,
    label: 'Flytt til papirkurv'
  }];
  const [bulkIds, setBulkIds] = useState<string[]>(defaultBulkIds);
  const bulkMode = bulkIds.length > 0;
  const onToggle = (id: string) => {
    if (bulkIds.includes(id)) {
      setBulkIds(bulkIds.filter(item => item !== id));
    } else {
      setBulkIds([...bulkIds, id]);
    }
  };
  const items = results?.items?.map((item, index) => {
    const id = 'item-' + index;
    const itemContextMenu = {
      items: [{
        groupId: '1',
        icon: CheckmarkIcon,
        label: 'Velg flere ...',
        onClick: () => onToggle(id)
      }, {
        groupId: '2',
        icon: ArrowRedoIcon,
        label: 'Del og gi tilgang'
      }, {
        groupId: '2',
        icon: EyeClosedIcon,
        label: 'Marker som lest'
      }, {
        groupId: '3',
        icon: ArchiveIcon,
        label: 'Flytt til arkiv'
      }, {
        groupId: '3',
        icon: TrashIcon,
        label: 'Flytt til papirkurv'
      }]
    };
    return {
      ...item,
      id,
      as: 'a',
      href: '#',
      color: layout?.color,
      selectable: bulkMode,
      tooltips: {
        status: 'Dette er dialogens status',
        sent: 'Antall meldinger sendt',
        received: 'Antall meldinger mottatt',
        seenBy: 'Hvem har sett dialogen?'
      },
      tabIndex: bulkMode ? 1 : undefined,
      selected: bulkIds?.includes(id),
      onClick: () => bulkMode ? onToggle(id) : alert('Open dialog'),
      controls: bulkMode ? <ItemSelect checked={bulkIds?.includes(id)} onClick={() => onToggle(id)} /> : <ContextMenu {...itemContextMenu} />
    };
  }) as DialogListProps['items'];
  const selectAll = () => {
    setBulkIds(items?.map(item => item.id as string) || []);
  };
  const unselectAll = () => {
    setBulkIds([]);
  };
  const sidebar = {
    ...layout?.sidebar,
    hidden: bulkMode
  };
  const bulkOptions = [{
    icon: CheckmarkIcon,
    label: 'Velg alle',
    onClick: selectAll
  }];
  const accountMenu = toolbar?.accountMenu;
  const currentAccount = accountMenu?.items?.find(item => item.selected) || accountMenu?.items[0];
  const breadcrumbsItems = layout?.breadcrumbs?.items || [];
  const bulkBreadcrumbsItems = [...breadcrumbsItems, {
    label: 'Velg flere',
    href: '/inbox'
  }];
  return <Layout {...layout} breadcrumbs={{
    ...layout?.breadcrumbs,
    items: bulkMode ? bulkBreadcrumbsItems : breadcrumbsItems
  }} sidebar={sidebar} useGlobalHeader={true}>
      <PageBase>
        <BulkHeader hidden={!bulkMode} title={bulkIds?.length + ' valgt'} options={bulkOptions} dismissable={true} onDismiss={unselectAll} />
        <Heading size="xl">Innboks</Heading>
        <Toolbar {...toolbar} search={{
        value: 'Skatt'
      }} disabled={bulkMode} accountMenu={{
        ...accountMenu,
        label: currentAccount?.name
      } as ToolbarProps['accountMenu']} />
        {results && <DialogList items={items} groups={results?.groups} />}

        <BulkFooter hidden={!bulkMode} actions={bulkActions} />
      </PageBase>
    </Layout>;
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`() => {
  return <Default defaultBulkIds={['item-0', 'item-1']} />;
}`,...M.parameters?.docs?.source}}};var N=[`Default`,`BulkModeOn`];export{M as BulkModeOn,j as Default,N as __namedExportsOrder,A as default};