import{a7 as t,c as o}from"./iframe-CAfDO4Rw.js";import{S as s}from"./Handshake-C-BQ0zgc.js";import{S as e}from"./Bell-Dly2m-qb.js";import{S as n}from"./Hashtag-DgRlEF6k.js";import{S as p}from"./Files-CchMkY2N.js";import{A as l}from"./AccountListItem-BKrliilY.js";import{A as m}from"./AccountListItemDetails-BYMNsAdM.js";import{L as c}from"./List-IhGHJ_0j.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-B4Cw7EmV.js";import"./Input-xoXFTL9F.js";import"./Avatar-CgZyFHuO.js";import"./AvatarGroup-wzegiK4S.js";import"./Badge-2r7QR-Ea.js";import"./Tooltip-CnjxI-as.js";import"./Heading-YvXsCKAz.js";import"./useHighlightedText-D1Egz4xv.js";import"./ChevronUp-Drx-r-2C.js";import"./ChevronDown-BlOuVwd9.js";import"./ChevronRight-CMD5YJ4n.js";import"./HeartFill-CH9OKaUe.js";import"./ContextMenu-omywxW20.js";import"./useDropdownMenuController-gEOrHOh0.js";import"./Dropdown-BLYLo4fX.js";import"./SearchField-CVnH2ZZ_.js";import"./MagnifyingGlass-CAS5EVy6.js";import"./FieldBase-E5ODadVE.js";import"./Typography-CTt20h0e.js";import"./Field-CeOsIMBN.js";import"./Label-Dty_TUWJ.js";import"./useMenu-BpN0JSlm.js";import"./MenuListItem-qxQn0xnV.js";import"./MenuListHeading-DQuMrLgT.js";import"./MenuItem-CDhdlBX8.js";import"./ItemMedia-C1xz5qH-.js";import"./Checkmark-DWkR78Cr.js";import"./ItemLabel-CW9F7Ljc.js";import"./ItemControls-DVGHNPwh.js";import"./index-B1ZW1R_L.js";import"./InformationSquare-Dty64Wjx.js";import"./MenuElipsisHorizontal-Opnuvmqm.js";import"./Section-BoMEazBp.js";import"./Flex-T7A62cDZ.js";import"./ButtonGroup-CUCgVY-r.js";import"./Divider-rkJRMH9u.js";import"./SettingsItem-oA_-525D.js";import"./SettingsItemBase-dCqVkkCT.js";import"./ItemBase-BuGGJ2CO.js";import"./ItemLink-CCPRI1Ze.js";import"./SettingsModal-YVbPlhU4.js";import"./ModalBody-BswaS8cy.js";import"./ButtonIcon-DGXgnp7S.js";import"./ButtonLabel-Dlfdkbnt.js";import"./AccountOrganization-DTOv73hd.js";import"./Byline-DmNUYBEe.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
