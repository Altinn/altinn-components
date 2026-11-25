var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-CZm9Z2L_.js";import{S as l}from"./Handshake-C2wVIX4_.js";import{S as a}from"./Bell-DUB8E5rY.js";import{S as m}from"./Hashtag-C1LhkJ9z.js";import{S as c}from"./Files-huj9YJRI.js";import{A as g}from"./AccountListItem-ChVyftMA.js";import{A as d}from"./AccountListItemDetails-DFCPnynV.js";import{L as u}from"./List-DQWfOE6F.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DzMq7FBw.js";import"./Input-BcwXpX3S.js";import"./Avatar-BfR_UP2W.js";import"./AvatarGroup-z1q2Yw0e.js";import"./Badge-DcBwCaoO.js";import"./Tooltip-CnehfAFo.js";import"./Heading-CGvkj5VV.js";import"./useHighlightedText-0BBntNc4.js";import"./ChevronUp-CIHpYQBC.js";import"./ChevronDown-Bb4C_BOJ.js";import"./ChevronRight-MmDri0bt.js";import"./HeartFill-DoCB_GBg.js";import"./ContextMenu-Bv-2X2Z3.js";import"./useDropdownMenuController-B7YFssqT.js";import"./Dropdown-CjN8UIhd.js";import"./SearchField-Cj8KK4lS.js";import"./MagnifyingGlass-DwPErScE.js";import"./MenuListItem-BwtayZGz.js";import"./MenuListDivider-CEL60lz2.js";import"./MenuItem-BBEZ09Ze.js";import"./CheckboxUncheckedIcon-B2FVZ7uO.js";import"./RadioUncheckedIcon-BajGCIeL.js";import"./ItemMedia-CpjA7nnT.js";import"./ItemLabel-B3mLAUUV.js";import"./ItemControls-1WPti-Pt.js";import"./FieldBase-BiQdP4ez.js";import"./Typography-99BUGcV3.js";import"./Field-5TCcBbbM.js";import"./Label-BT4-swg_.js";import"./useMenu-czaSJY_k.js";import"./InformationSquare-C62nR7w8.js";import"./Section-z-IVKGiV.js";import"./Flex-piEowcmm.js";import"./ButtonGroup-7aJoGw6J.js";import"./Divider-qPWkBqr9.js";import"./SettingsItem-tFT6qvjm.js";import"./SettingsItemBase-yCvB55PI.js";import"./ItemBase-CcZPPggP.js";import"./ItemLink-u7oYbdQM.js";import"./SettingsModal-C4kkBz7a.js";import"./ModalBody-B6uDomnX.js";import"./ButtonIcon-C0K5IRwl.js";import"./ButtonLabel-CupeExgA.js";import"./AccountOrganization-CfXQaF7F.js";import"./Byline-BnpbJ8kJ.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true,
    expanded: true,
    interactive: false,
    children: <AccountListItemDetails settings={[{
      id: '1',
      title: 'Rolle og tilganger',
      value: 'Daglig leder',
      badge: {
        label: '4 tilganger'
      },
      icon: HandshakeIcon,
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på SMS',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Legg til'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '2',
      title: 'Varslinger på e-post',
      value: 'mathias@gmail.com',
      icon: BellIcon,
      badge: {
        variant: 'text',
        label: 'Endre'
      },
      variant: 'modal',
      linkIcon: true
    }, {
      id: '3',
      title: 'Organisasjonsnummer',
      value: 'XXX XXX XXX',
      icon: HashtagIcon,
      as: 'button',
      onClick: () => alert('Org nr. ble kopiert'),
      controls: <Button as="div" size="xs" variant="ghost">
                <FilesIcon />
                <span>Kopier org. nr</span>
              </Button>
    }]} organization={[{
      title: 'Diaspora Bergensis',
      description: 'Org nr. 928914038',
      avatar: {
        type: 'company',
        name: 'Diaspora Bergensis'
      },
      selected: true,
      items: [{
        title: 'Diaspora Bergensis',
        description: 'Org nr. 928914038',
        avatar: {
          type: 'company',
          name: 'Diaspora Bergensis',
          variant: 'outline'
        }
      }]
    }]} />
  } as AccountListItemProps
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,bt as __namedExportsOrder,xt as default};
