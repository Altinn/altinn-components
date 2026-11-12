var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a7 as t,c as p}from"./iframe-D6r7-MD4.js";import{S as l}from"./Handshake-D0YHbkM1.js";import{S as a}from"./Bell--e4uljyi.js";import{S as m}from"./Hashtag-40A5tKpU.js";import{S as c}from"./Files-dRTcCvjc.js";import{A as g}from"./AccountListItem-DiwDRNop.js";import{A as d}from"./AccountListItemDetails-BxYcQtNl.js";import{L as u}from"./List-CNLkXZoG.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-gXA8ij5k.js";import"./Input-CtcmBtOO.js";import"./Avatar-DRH-z-Xj.js";import"./AvatarGroup-Ba2zvAJ7.js";import"./Badge-CP83yfsu.js";import"./Tooltip-CXVzZfKB.js";import"./Heading-BBX9eyEy.js";import"./useHighlightedText-ByiYciR_.js";import"./ChevronUp-o2c5iYOu.js";import"./ChevronDown-CA3F-CAN.js";import"./ChevronRight-B-ItEsH6.js";import"./HeartFill-6Q0CsPxj.js";import"./ContextMenu-B9oz4ZZo.js";import"./useDropdownMenuController-BwhWyrgf.js";import"./useIsDesktop-EdoKGz01.js";import"./Dropdown-C-gLDO5J.js";import"./SearchField-xJmrCU7q.js";import"./commonTexts-CG1mkCQM.js";import"./MagnifyingGlass-Bj8AyQob.js";import"./MenuListItem-BIaSNRVF.js";import"./MenuListDivider-DoLEaBRc.js";import"./MenuItem-CVg-Aq96.js";import"./CheckboxUncheckedIcon-B9mzN8fM.js";import"./RadioUncheckedIcon-CaPqnsDK.js";import"./ItemMedia-CeccNKOc.js";import"./ItemLabel-CjCW6exE.js";import"./ItemControls-Cgg9ynEC.js";import"./FieldBase-BsGJArhX.js";import"./Typography-CHbDBJK8.js";import"./Field-Des1xs_L.js";import"./Label-C4LgoAnx.js";import"./useMenu-BVbqxAfY.js";import"./InformationSquare-Rb80un_D.js";import"./Section-CZyWrzO9.js";import"./Flex-BbelGz4F.js";import"./ButtonGroup-Br96c_T4.js";import"./Divider-CAzg1frs.js";import"./SettingsItem-DRgIEsRj.js";import"./SettingsItemBase-CykaSvC5.js";import"./ItemBase-CTt5NrfE.js";import"./ItemLink-C_nP4AK3.js";import"./SettingsModal-C3nFnbLP.js";import"./ModalBody-d0UpXorR.js";import"./ButtonLabel-D2IlmIEz.js";import"./AccountOrganization-D-DIh5vf.js";import"./Byline-U85WJkat.js";const bt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},Xt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};export{r as Default,n as Expanded,Xt as __namedExportsOrder,bt as default};
