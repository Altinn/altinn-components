import{j as e,r as f}from"./iframe-C30XMp4u.js";import{S as I,a as v,b,c as S}from"./PadlockLockedFill-CKYmUPSl.js";import{S as h}from"./Archive-BZkpamMr.js";import{S as k}from"./Trash-CAta8Rpy.js";import{S as j}from"./InboxFill-ZOk75VQL.js";import{S as y}from"./MenuGrid-B8ciIJjM.js";import{S as C}from"./PersonCircle-BJhFQVEb.js";import{S as z}from"./Bell-ClikR16e.js";import{S as B}from"./Globe-Bp6G8iI8.js";import{S as T}from"./InformationSquare-Cu6RA9m9.js";import{S as w}from"./Buildings2-BCw0Kg2z.js";import{S as P}from"./ChevronUp-Dd9Cdp1N.js";import{S as E}from"./ChevronDown-BpTniz1S.js";import{M as D,a as M}from"./SearchField-GqHOGaRS.js";import{B as u}from"./Button-DDYo0e3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-k4Xjw1TB.js";import"./index-Dfjgmy9H.js";import"./MagnifyingGlass-BcLoywmE.js";import"./XMark-ZCF0kQw6.js";import"./FieldBase-Cg7qaDyY.js";import"./Typography-C7Aiwmst.js";import"./useHighlightedText-BcdufPkD.js";import"./Skeleton-DYu3bsVd.js";import"./Label-CZ9Sm67x.js";import"./index-MPuYdx8K.js";import"./use-merge-refs-DdAPjJhd.js";import"./lite-DaUVFjkg.js";import"./Input-BZkkYvOZ.js";import"./input-BbRzGenc.js";import"./MenuListItem-Dweo6pop.js";import"./MenuListHeading-0U1jptlM.js";import"./MenuItem-BItckqMb.js";import"./ItemMedia-DZiSht8H.js";import"./Avatar-md5Lcy6_.js";import"./AvatarGroup-BxUIiam6.js";import"./Icon-BW7eZq3t.js";import"./Checkmark-BHVaOMRl.js";import"./Heading-r7KrHQRq.js";import"./ItemControls-XLXkfke2.js";import"./ChevronRight-cMtudnfA.js";import"./Badge-BL5WZhsc.js";import"./useMenu-HLwWT2ab.js";import"./button-vIDiYGt4.js";const Ce={title:"Menu/CollapsibleMenu",component:D,parameters:{layout:"fullscreen"},decorators:[d=>{const a={backgroundColor:"var(--ds-color-base-default)",width:"100%",height:"100vh",padding:".5em",display:"flex",justifyContent:"center",alignItems:"center"};return e.jsx("div",{style:a,children:e.jsx(d,{})})}],args:{variant:"default"}},t=({defaultId:d="",color:a="company"})=>{const[o,m]=f.useState(d),p=r=>{m(r===o?"":r)},c=({id:r})=>e.jsx(u,{icon:!0,size:"xs",variant:"outline",onClick:()=>p(r),children:o===r?e.jsx(P,{}):e.jsx(E,{})}),g={inbox:{size:"lg",variant:o==="inbox"?"tinted":"default",style:o==="access"?{backgroundColor:"var(--ds-color-background-tinted)"}:{}},access:{size:"lg",divider:o==="inbox"||o==="access",variant:o==="access"?"tinted":"default"},forms:{size:"lg",divider:o==="forms"||o==="access",variant:o==="forms"?"tinted":"default"},info:{variant:"default",size:"sm"},settings:{variant:"default",size:"sm"},"submenu-1":{variant:"tinted",size:"md"},"submenu-2":{variant:"tinted",size:"md"}},l=[{id:"drafts",groupId:"submenu-1",icon:I,title:"Utkast"},{id:"sent",groupId:"submenu-1",icon:v,title:"Sendt"},{id:"archive",groupId:"submenu-2",icon:h,title:"Arkivert"},{id:"trash",groupId:"submenu-2",icon:k,title:"Papirkurv"}],x=[{id:"inbox",groupId:"inbox",icon:j,title:"Inbox",controls:e.jsx(c,{id:"inbox"}),expanded:o==="inbox",items:l},{id:"access",groupId:"access",icon:b,title:"Tilgangsstyring",controls:e.jsx(c,{id:"access"}),expanded:o==="access",items:l},{id:"forms",groupId:"forms",icon:y,title:"Skjema og tjenester",controls:e.jsx(c,{id:"forms"}),expanded:o==="forms",items:l},{id:"profile",groupId:"settings",icon:C,title:"Din profil"},{id:"alerts",groupId:"settings",icon:z,title:"Varslinger"},{id:"language",groupId:"settings",icon:B,title:"Språk/language",linkIcon:!0},{id:"about",groupId:"info",icon:T,title:"Om nye Altinn"},{id:"start",groupId:"info",icon:w,title:"Starte og drive bedrift"},{id:"help",groupId:"info",icon:S,title:"Trenger du hjelp?"}];return e.jsxs("nav",{"data-color":a,style:{backgroundColor:"white",maxWidth:360,borderRadius:"8px",padding:"0.5em",boxShadow:"var(--ds-shadow-sm)",overflow:"hidden"},children:[e.jsx(M,{groups:g,items:x,size:"md"}),e.jsx("footer",{style:{padding:"0.5em"},children:e.jsx(u,{style:{width:"100%"},variant:"outline",children:"Logg ut"})})]})},i=()=>e.jsx(t,{defaultId:"inbox"}),n=()=>e.jsx(t,{defaultId:"access"}),s=()=>e.jsx(t,{color:"person"});t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  defaultId = '',
  color = 'company'
}: {
  defaultId?: string;
  color?: MenuProps['color'];
}) => {
  const [expandedId, setExpandedId] = useState(defaultId);
  const onToggle = (id: string) => {
    setExpandedId(id === expandedId ? '' : id);
  };
  const ToggleButton = ({
    id
  }: {
    id: string;
  }) => {
    return <Button icon size="xs" variant="outline" onClick={() => onToggle(id)}>
        {expandedId === id ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Button>;
  };
  const expandedStyle = {
    backgroundColor: 'var(--ds-color-background-tinted)'
  };
  const groups = {
    inbox: {
      size: 'lg',
      variant: expandedId === 'inbox' ? 'tinted' : 'default',
      style: expandedId === 'access' ? expandedStyle : {}
    },
    access: {
      size: 'lg',
      divider: !!(expandedId === 'inbox' || expandedId === 'access'),
      variant: expandedId === 'access' ? 'tinted' : 'default'
    },
    forms: {
      size: 'lg',
      divider: !!(expandedId === 'forms' || expandedId === 'access'),
      variant: expandedId === 'forms' ? 'tinted' : 'default'
    },
    info: {
      variant: 'default',
      size: 'sm'
    },
    settings: {
      variant: 'default',
      size: 'sm'
    },
    'submenu-1': {
      variant: 'tinted',
      size: 'md'
    },
    'submenu-2': {
      variant: 'tinted',
      size: 'md'
    }
  };
  const submenu = [{
    id: 'drafts',
    groupId: 'submenu-1',
    icon: DocPencilIcon,
    title: 'Utkast'
  }, {
    id: 'sent',
    groupId: 'submenu-1',
    icon: FileCheckmarkIcon,
    title: 'Sendt'
  }, {
    id: 'archive',
    groupId: 'submenu-2',
    icon: ArchiveIcon,
    title: 'Arkivert'
  }, {
    id: 'trash',
    groupId: 'submenu-2',
    icon: TrashIcon,
    title: 'Papirkurv'
  }];
  const items = [{
    id: 'inbox',
    groupId: 'inbox',
    icon: InboxFillIcon,
    title: 'Inbox',
    controls: <ToggleButton id="inbox" />,
    expanded: expandedId === 'inbox',
    items: submenu
  }, {
    id: 'access',
    groupId: 'access',
    icon: PadlockLockedFillIcon,
    title: 'Tilgangsstyring',
    controls: <ToggleButton id="access" />,
    expanded: expandedId === 'access',
    items: submenu
  }, {
    id: 'forms',
    groupId: 'forms',
    icon: MenuGridIcon,
    title: 'Skjema og tjenester',
    controls: <ToggleButton id="forms" />,
    expanded: expandedId === 'forms',
    items: submenu
  }, {
    id: 'profile',
    groupId: 'settings',
    icon: PersonCircleIcon,
    title: 'Din profil'
  }, {
    id: 'alerts',
    groupId: 'settings',
    icon: BellIcon,
    title: 'Varslinger'
  }, {
    id: 'language',
    groupId: 'settings',
    icon: GlobeIcon,
    title: 'Språk/language',
    linkIcon: true
  }, {
    id: 'about',
    groupId: 'info',
    icon: InformationSquareIcon,
    title: 'Om nye Altinn'
  }, {
    id: 'start',
    groupId: 'info',
    icon: Buildings2Icon,
    title: 'Starte og drive bedrift'
  }, {
    id: 'help',
    groupId: 'info',
    icon: ChatExclamationmarkIcon,
    title: 'Trenger du hjelp?'
  }];
  return <nav data-color={color} style={{
    backgroundColor: 'white',
    maxWidth: 360,
    borderRadius: '8px',
    padding: '0.5em',
    boxShadow: 'var(--ds-shadow-sm)',
    overflow: 'hidden'
  }}>
      <MenuItems groups={groups as MenuProps['groups']} items={items as MenuProps['items']} size="md" />
      <footer style={{
      padding: '0.5em'
    }}>
        <Button style={{
        width: '100%'
      }} variant="outline">
          Logg ut
        </Button>
      </footer>
    </nav>;
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  return <Default defaultId="inbox" />;
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  return <Default defaultId="access" />;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return <Default color="person" />;
}`,...s.parameters?.docs?.source}}};const ze=["Default","InboxExpanded","AdminExpanded","Person"];export{n as AdminExpanded,t as Default,i as InboxExpanded,s as Person,ze as __namedExportsOrder,Ce as default};
