import{a7 as t,c as o}from"./iframe-Cj7V21km.js";import{S as s}from"./Handshake-PBazp3RQ.js";import{S as e}from"./Bell-BFQ1zGto.js";import{S as n}from"./Hashtag-C7FSZOBb.js";import{S as p}from"./Files-DoY2bKxX.js";import{A as l}from"./AccountListItem-Dg1BiaQn.js";import{A as m}from"./AccountListItemDetails-CioSP-ne.js";import{L as c}from"./List-DAmkN_iB.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-iMDmyxkq.js";import"./Input-DnU3MXtK.js";import"./Avatar-D_h-dTDE.js";import"./AvatarGroup-WUTqusx8.js";import"./Badge-DmpmaSED.js";import"./Tooltip-D-lEMjLJ.js";import"./Heading-BRQOSuW8.js";import"./useHighlightedText-gdz5u-yJ.js";import"./ChevronUp-d_RO8MoQ.js";import"./ChevronDown-SIqR4dbe.js";import"./ChevronRight-DWxpnRfX.js";import"./HeartFill-B0fwXfOV.js";import"./ContextMenu-BXNKEOUh.js";import"./useDropdownMenuController-Dx7Ua8eg.js";import"./Dropdown-BCb8vxkT.js";import"./SearchField-BEMeTu2B.js";import"./MagnifyingGlass-B8zavmyI.js";import"./FieldBase-D_BM9i5X.js";import"./Typography-B3pfG5kD.js";import"./Field-Cnt4wz2p.js";import"./Label-Bl6bhyHp.js";import"./useMenu-DM-7OZIV.js";import"./MenuListItem-CO0eoNuC.js";import"./MenuListDivider-Cd6IMkL-.js";import"./MenuListHeading-CRxb5-RD.js";import"./MenuItem-CHAPJdhJ.js";import"./ItemMedia-CT1Qhol1.js";import"./Checkmark-CVZzCtvU.js";import"./ItemLabel-C1bWOeuh.js";import"./ItemControls-C0hj5koB.js";import"./InformationSquare-NQW98JPt.js";import"./MenuElipsisHorizontal-CgwSiBWF.js";import"./Section-fD1somlY.js";import"./Flex-CMfzrDGq.js";import"./ButtonGroup--sivQYNz.js";import"./Divider-slRSyerO.js";import"./SettingsItem-XrWj5x6O.js";import"./SettingsItemBase-DAczY4vG.js";import"./ItemBase-B85att75.js";import"./ItemLink-D-NZ4xQE.js";import"./SettingsModal-C38mM1Zv.js";import"./ModalBody-Bg14fQJl.js";import"./ButtonIcon-BJPub_WA.js";import"./ButtonLabel-LAa8UsBL.js";import"./AccountOrganization-DoR-Zece.js";import"./Byline-C3WDi-X0.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const ut=["Default","Expanded"];export{r as Default,i as Expanded,ut as __namedExportsOrder,dt as default};
