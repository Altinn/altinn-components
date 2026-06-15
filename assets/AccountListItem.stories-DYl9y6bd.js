import{a7 as t,c as o}from"./iframe-B7zm1HIO.js";import{S as s}from"./Handshake-BLNBgdmh.js";import{S as e}from"./Bell-D0p2v7L1.js";import{S as n}from"./Hashtag-C2Ttsx9J.js";import{S as p}from"./Files-CvjL5nKd.js";import{A as l}from"./AccountListItem-D3rrKBEZ.js";import{A as m}from"./AccountListItemDetails-q8J7S2MZ.js";import{L as c}from"./List-CkiccdRL.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-CiWjvc3C.js";import"./Input-w1DANTSA.js";import"./Avatar-moSMPGHi.js";import"./AvatarGroup-BaLNA_5N.js";import"./Badge-C4nIiofZ.js";import"./Tooltip-Cey7ITFK.js";import"./Heading-C4G9hOYj.js";import"./useHighlightedText-DWzAFf8R.js";import"./ChevronUp-Drwzt9gE.js";import"./ChevronDown-D45B7h4T.js";import"./ChevronRight-BItcH0VL.js";import"./HeartFill-C8fhVq4A.js";import"./ContextMenu-BrTPiQIt.js";import"./useDropdownMenuController-CJ7JaMXA.js";import"./Dropdown-C9l14m04.js";import"./SearchField-DukYslSD.js";import"./MagnifyingGlass-CVQmLynz.js";import"./FieldBase-gSBe5vO6.js";import"./Typography-DnprxIFo.js";import"./Field-09k_Fgnw.js";import"./Label-DrdmFEDz.js";import"./useMenu-BJG43rHp.js";import"./MenuListItem-6z1MFl70.js";import"./MenuListDivider-Bbe3EvM4.js";import"./MenuListHeading-Y6BZZd_3.js";import"./MenuItem-B-gSoajH.js";import"./ItemMedia-DpKMg9GF.js";import"./Checkmark-BLhcN1Ai.js";import"./ItemLabel-CWIv-i-M.js";import"./ItemControls-Cwe9s8QR.js";import"./InformationSquare-ZkZeHusi.js";import"./MenuElipsisHorizontal-nksXxlhw.js";import"./Section-DkuWWe6d.js";import"./Flex-N2sBTmCS.js";import"./ButtonGroup-DEQPq0-6.js";import"./Divider-DLUyO367.js";import"./SettingsItem-B56SZn_n.js";import"./SettingsItemBase-BHxVPfuU.js";import"./ItemBase-ChXBoego.js";import"./ItemLink-nWgCSWqv.js";import"./SettingsModal-D2UTX3Lg.js";import"./ModalBody-BUYK0n2i.js";import"./ButtonIcon-HLjqR8Bo.js";import"./ButtonLabel-D1cCa6No.js";import"./AccountOrganization-D2zKi9fR.js";import"./Byline-avPt5eDg.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
