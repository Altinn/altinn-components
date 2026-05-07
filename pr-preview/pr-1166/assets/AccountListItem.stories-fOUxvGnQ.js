import{j as t}from"./iframe-BLYnYdJi.js";import{S as a}from"./Handshake-CvME5gST.js";import{S as e}from"./Bell-Cb-YtyNE.js";import{S as s}from"./Hashtag-DfB4gUoQ.js";import{S as n}from"./Files-CjJrN8ED.js";import{A as p}from"./AccountListItem-DtjWKxmK.js";import{L as m}from"./List-DoiYd3aY.js";import{A as l}from"./AccountListItemDetails-DEw5jnqf.js";import{B as c}from"./Button-DA7PTG8V.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-X7maRfkh.js";import"./ListItem-Bj5rSe3Q.js";import"./index-B87fQ9Ty.js";import"./Input-6k10kXxt.js";import"./input-D5lGbDkw.js";import"./lite-DaUVFjkg.js";import"./XMark-Df3dBUtr.js";import"./Icon-BBgjdpk7.js";import"./Skeleton-DVFvYbaO.js";import"./Avatar-R2BW9KiJ.js";import"./AvatarGroup-Bj4w1IxT.js";import"./Badge-C8IaAeJ7.js";import"./Tooltip-C4gqbQ4g.js";import"./floating-ui.dom-DCpi3RTt.js";import"./use-merge-refs-FLCzGq2C.js";import"./Heading-BbPallRO.js";import"./useHighlightedText-omqdYwyr.js";import"./ChevronUp-B2zncOUr.js";import"./ChevronDown-2Zea4dpX.js";import"./ChevronRight-BKn9ueoN.js";import"./HeartFill-H3FcMj78.js";import"./ContextMenu-B4pAtZpC.js";import"./useDropdownMenuController--K-V2jGb.js";import"./Dropdown-B_CqShRd.js";import"./MenuElipsisHorizontal-CLaaCIK6.js";import"./SearchField-BrbRKSJg.js";import"./MagnifyingGlass-vVGrqHq4.js";import"./FieldBase-CvSJrP7q.js";import"./Typography-CnODk9AP.js";import"./Label-Br4cyMgU.js";import"./index-CJAPncw7.js";import"./MenuListItem-4EzyMnJz.js";import"./MenuListHeading-CHqHsXip.js";import"./MenuItem-QRksz61A.js";import"./ItemMedia-PaceHGjP.js";import"./Checkmark-DfNuFQY9.js";import"./ItemControls-lA3CDM6n.js";import"./useMenu-DImJoMjP.js";import"./InformationSquare-OOV4URoX.js";import"./Flex-CND7PM33.js";import"./Section-B5XykhYf.js";import"./ButtonGroup-CEDbAWnm.js";import"./Divider-D3w2CTq8.js";import"./SettingsItem-J1i6r-1O.js";import"./SettingsItemBase-Brvq-wHI.js";import"./ItemLink-nxmPLkpY.js";import"./SettingsModal-DLblaO99.js";import"./ModalBody-BORqoVqO.js";import"./ButtonIcon-B3x5IOfQ.js";import"./ButtonLabel-DtaexAPQ.js";import"./AccountOrganization-CVM9ydEs.js";import"./Byline-rn6rol_O.js";import"./button-B4GPokGl.js";const Dt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[o=>t.jsx(m,{children:t.jsx(o,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:a,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    collapsible: true
  } as AccountListItemProps
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ft=["Default","Expanded"];export{r as Default,i as Expanded,ft as __namedExportsOrder,Dt as default};
