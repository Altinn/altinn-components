import{a7 as t,c as o}from"./iframe-CeD8DZF_.js";import{S as s}from"./Handshake-BlHDFlkV.js";import{S as e}from"./Bell-BPsDKzao.js";import{S as n}from"./Hashtag-BAx1I111.js";import{S as p}from"./Files-8ia2J4Rc.js";import{A as l}from"./AccountListItem-DJpBElWU.js";import{A as m}from"./AccountListItemDetails-zC9PaA_V.js";import{L as c}from"./List-9yu3lGOt.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-DB5KLH66.js";import"./Input-B6Hxr8dW.js";import"./Avatar-D8aGqJlF.js";import"./AvatarGroup-fNYoTzyx.js";import"./Badge-BzMsK0Kj.js";import"./Tooltip-DJy5VenJ.js";import"./Heading-CqEhdWlY.js";import"./useHighlightedText-qfj7RnMw.js";import"./ChevronUp-CcrHqtW6.js";import"./ChevronDown-y5t2TNH2.js";import"./ChevronRight-B8wcZ9md.js";import"./HeartFill-Cs4AGepw.js";import"./ContextMenu-Civ_gyCw.js";import"./useDropdownMenuController-D9gVQRIM.js";import"./Dropdown-gDr2Qds9.js";import"./SearchField-D9P8-rjO.js";import"./MagnifyingGlass-DbRqyBnQ.js";import"./FieldBase-BbgmrWIh.js";import"./Typography-D10BEJyK.js";import"./Field-DdzYX5Hl.js";import"./Label-DgGQ1tMX.js";import"./useMenu-Cr0Tzvrf.js";import"./MenuListItem-dRCDziUR.js";import"./MenuListDivider-CA69mol6.js";import"./MenuListHeading-C1lg1_sH.js";import"./MenuItem-D5qCw848.js";import"./ItemMedia-CjD5QxWk.js";import"./Checkmark-C90PiZqs.js";import"./ItemLabel-CBqRB1sq.js";import"./ItemControls-CphkAdhU.js";import"./InformationSquare-CNpr0xiM.js";import"./MenuElipsisHorizontal-DxLx2qOI.js";import"./Section-18Uf7Mat.js";import"./Flex-BOkBPJQr.js";import"./ButtonGroup-C3-Lq824.js";import"./Divider-CNvjQvQ-.js";import"./SettingsItem-BTdwOe9j.js";import"./SettingsItemBase-G5kM6T3P.js";import"./ItemBase-BBKknlL_.js";import"./ItemLink-DvfF8HnK.js";import"./SettingsModal-DO2hkuYe.js";import"./ModalBody-B4hCRN8z.js";import"./ButtonIcon-C0Csvo29.js";import"./ButtonLabel-BzOdEbMB.js";import"./AccountOrganization-RfzRkqet.js";import"./Byline-KDNVSBdT.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
