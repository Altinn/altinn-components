var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-BhbNl8M-.js";import{S as l}from"./Handshake-C6OGLhXJ.js";import{S as o}from"./Bell-Cnsmdj93.js";import{S as m}from"./Hashtag-B_OgRBGA.js";import{S as c}from"./Files-oc8U2fk6.js";import{A as g}from"./AccountListItem-CsHNp_jK.js";import{A as d}from"./AccountListItemDetails-JVuXD5hu.js";import{L as u}from"./List-CK1afVUo.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-BZwC__IQ.js";import"./Input-jGspNcB3.js";import"./Avatar-BNyDKZi7.js";import"./AvatarGroup-B4pMcHMh.js";import"./Badge-np8uN8Yi.js";import"./Tooltip-8dIP2lk7.js";import"./Heading-Cykhux0L.js";import"./useHighlightedText-LhTntwcL.js";import"./ChevronUp-Dq4__2Sc.js";import"./ChevronDown-FDOS9kby.js";import"./ChevronRight-DG59p-Nv.js";import"./HeartFill-DKoAVF2-.js";import"./ContextMenu-Ij8B0w81.js";import"./useDropdownMenuController-BrJ75r99.js";import"./Dropdown--p27U_G_.js";import"./SearchField-ClYBiZmS.js";import"./MagnifyingGlass-CzKquxqQ.js";import"./FieldBase--SCvu2WQ.js";import"./Typography-DcyIPmTi.js";import"./Field-Qg24LC8p.js";import"./Label-BJPwmzpN.js";import"./useMenu-6KerkDf-.js";import"./MenuListItem-CmOECRgU.js";import"./MenuListDivider-DzxdVQ89.js";import"./MenuListHeading-DAQ9yky2.js";import"./MenuItem-C2AE0J9V.js";import"./ItemMedia-1lh8-vEh.js";import"./Checkmark-CzAA5vNN.js";import"./ItemLabel-BJSi7rzf.js";import"./ItemControls-Enh4UL9O.js";import"./InformationSquare-9qL3pT6L.js";import"./MenuElipsisHorizontal-BHZ3A16x.js";import"./Section-w9Om4z74.js";import"./Flex-ywhhAUvJ.js";import"./ButtonGroup-Tx5tOZpy.js";import"./Divider-DT7uBvpy.js";import"./SettingsItem-M5wCerUM.js";import"./SettingsItemBase-CAbwX_aT.js";import"./ItemBase-H82chU0B.js";import"./ItemLink-BMM2GMUL.js";import"./SettingsModal-C5lElqHH.js";import"./ModalBody-MK76vZzv.js";import"./ButtonIcon-7FhxMerM.js";import"./ButtonLabel-Cq2XOZ5S.js";import"./AccountOrganization-xSsyx8DU.js";import"./Byline-Dz5EAti2.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Xt=["Default","Expanded"];export{r as Default,i as Expanded,Xt as __namedExportsOrder,xt as default};
