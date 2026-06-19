import{a7 as t,c as o}from"./iframe-DmJr8_aG.js";import{S as s}from"./Handshake-DGH_dKR7.js";import{S as e}from"./Bell-BiSPcz-A.js";import{S as n}from"./Hashtag-fWfKbWwR.js";import{S as p}from"./Files-4UFVzp3H.js";import{A as l}from"./AccountListItem-kM7R7bvt.js";import{A as m}from"./AccountListItemDetails-8gOq7sJI.js";import{L as c}from"./List-BYhLWM8c.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-8cwJLY10.js";import"./Input-CMjX-VJR.js";import"./Avatar-CCqY5Lgk.js";import"./AvatarGroup-DMmx4iVX.js";import"./Badge-BVYKJFB5.js";import"./Tooltip-DijYReqr.js";import"./Heading-I9-B5g1d.js";import"./useHighlightedText-CDpmDje8.js";import"./ChevronUp-C82RtbQz.js";import"./ChevronDown-hTjRae3D.js";import"./ChevronRight-kR30sXpx.js";import"./HeartFill-D2JR3RsC.js";import"./ContextMenu-Ce4MM7JC.js";import"./useDropdownMenuController-C3IF3Z6L.js";import"./Dropdown-CSc8TyC7.js";import"./SearchField-DIEgnIKm.js";import"./MagnifyingGlass-CtP3bCTw.js";import"./FieldBase-B-b_vsUI.js";import"./Typography-B5vyFnSY.js";import"./Field-z2_rHtRr.js";import"./Label-C9gCQCNv.js";import"./useMenu-DCAZlAYS.js";import"./MenuListItem-CfwtrDuI.js";import"./MenuListDivider-DxYIfIoZ.js";import"./MenuListHeading-D4ODluyz.js";import"./MenuItem-BAlZe3i8.js";import"./ItemMedia-BAIJH8U4.js";import"./Checkmark-DdnTh1PT.js";import"./ItemLabel-BZFwI3Qg.js";import"./ItemControls-C3FVXvI0.js";import"./InformationSquare-BDz-_K2o.js";import"./MenuElipsisHorizontal-BSIPnNnd.js";import"./Section-xPiqNpLG.js";import"./Flex-D91Qf6jp.js";import"./ButtonGroup-ps_HIdpu.js";import"./Divider-Bp9bwdzN.js";import"./SettingsItem-COZXjv2F.js";import"./SettingsItemBase-CadGMhEl.js";import"./ItemBase-DGqNBtsw.js";import"./ItemLink-CF3E9h13.js";import"./SettingsModal-B1XNc6l-.js";import"./ModalBody-C0hCt4EK.js";import"./ButtonIcon-lLWPwtnI.js";import"./ButtonLabel-CTdEbbj7.js";import"./AccountOrganization-BtoWlfM8.js";import"./Byline-DuJyYQ2y.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
