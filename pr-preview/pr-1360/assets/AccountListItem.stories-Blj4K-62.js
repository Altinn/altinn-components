import{a7 as t,c as o}from"./iframe-BRgClhpr.js";import{S as s}from"./Handshake-C9ktTfw6.js";import{S as e}from"./Bell-CEAYro3N.js";import{S as n}from"./Hashtag-DeZ_NzKQ.js";import{S as p}from"./Files-DWqq15Ev.js";import{A as l}from"./AccountListItem-ByDyzF8u.js";import{A as m}from"./AccountListItemDetails-D62Xzpml.js";import{L as c}from"./List-V6__rx0O.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CPBMHy8j.js";import"./Input-C7r6_Ftd.js";import"./Avatar-X_UXtw_G.js";import"./AvatarGroup-Tv1EoB7j.js";import"./Badge-DWERQKY0.js";import"./Tooltip-DwlyrKqO.js";import"./Heading-D9ujzuNV.js";import"./useHighlightedText-DTOSK592.js";import"./ChevronUp-D-x3gjGi.js";import"./ChevronDown-B8Xryl2N.js";import"./ChevronRight-BLIKQh_h.js";import"./HeartFill-CiU8pCIe.js";import"./ContextMenu-BusqlWA9.js";import"./useDropdownMenuController-CFHgccGy.js";import"./Dropdown-DgbN3_NI.js";import"./SearchField--IrWsBEa.js";import"./MagnifyingGlass-DQctf2To.js";import"./FieldBase-D8LAV1W4.js";import"./Typography-BKJ9hmvo.js";import"./Field-DqCTTwOm.js";import"./Label-BrO-Curr.js";import"./useMenu-C_5VwfPF.js";import"./MenuListItem-rBdScGXY.js";import"./MenuListDivider-DSrBiGuI.js";import"./MenuListHeading-BqZAg_LU.js";import"./MenuItem-jszC7nZR.js";import"./ItemMedia-DpaVUI33.js";import"./Checkmark-CT8uSN89.js";import"./ItemLabel-CvYCQ28O.js";import"./ItemControls-WDxokqHy.js";import"./InformationSquare-DK9XnxPK.js";import"./MenuElipsisHorizontal-CzndoW4V.js";import"./Section-vNolLCey.js";import"./Flex-A0QnVpm8.js";import"./ButtonGroup-Ce1vy6GX.js";import"./Divider-CxkA-0zz.js";import"./SettingsItem-C5usjGo5.js";import"./SettingsItemBase-DGTy7aHu.js";import"./ItemBase-D-9VP-93.js";import"./ItemLink-eV9BuEU9.js";import"./SettingsModal-DtDMfpcs.js";import"./ModalBody-B3ugA79U.js";import"./ButtonIcon-CvMB-V2D.js";import"./ButtonLabel-DsKejs7R.js";import"./AccountOrganization-BAJf7jfm.js";import"./Byline-D_KBo-zr.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
