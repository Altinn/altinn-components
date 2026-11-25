var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-BYGPhf7N.js";import{S as l}from"./Handshake-oS6m7P_Y.js";import{S as a}from"./Bell-BfrH_baH.js";import{S as m}from"./Hashtag-7DIUGeey.js";import{S as c}from"./Files-DigYcGXN.js";import{A as g}from"./AccountListItem-Cz6kZ2Em.js";import{A as d}from"./AccountListItemDetails-2zgOxCio.js";import{L as u}from"./List-BwgjUCyd.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-Bby1Lp_7.js";import"./Input-C9cQp4bZ.js";import"./Avatar-B_FLCNK9.js";import"./AvatarGroup-BKwaFY6K.js";import"./Badge-qi425Zbf.js";import"./Tooltip-egmjN7rU.js";import"./Heading-C5-vf6se.js";import"./useHighlightedText-B7c7eBDx.js";import"./ChevronUp-C71MAo1t.js";import"./ChevronDown-DPBIQHio.js";import"./ChevronRight-BckCGbec.js";import"./HeartFill-Djummj3_.js";import"./ContextMenu-D1_m3HcS.js";import"./useDropdownMenuController-C82Fl8tQ.js";import"./Dropdown-0Y8H4iVy.js";import"./SearchField-BySPj-oD.js";import"./MagnifyingGlass-u7KFDhSG.js";import"./MenuListItem-Er-de1vm.js";import"./MenuListDivider-C-25gy3r.js";import"./MenuItem-BciZRIkx.js";import"./CheckboxUncheckedIcon-Bc2cW9fu.js";import"./RadioUncheckedIcon-xfigfStp.js";import"./ItemMedia-ApKMdvQL.js";import"./ItemLabel-KBN1Srj3.js";import"./ItemControls-1sBh4pPD.js";import"./FieldBase-eqne-WwB.js";import"./Typography-BHNcIxxH.js";import"./Field-CZH9Low_.js";import"./Label-DXziafiV.js";import"./useMenu-r2OQI4uO.js";import"./InformationSquare-Cx25xyTl.js";import"./Section-BRaGuhHv.js";import"./Flex-DJhBIPT8.js";import"./ButtonGroup-c8ZaNYEQ.js";import"./Divider-B0gFAPK4.js";import"./SettingsItem-CrMyEmsf.js";import"./SettingsItemBase-pJ5WgIh7.js";import"./ItemBase-q-LDfooT.js";import"./ItemLink-bFvWK9OW.js";import"./SettingsModal-Ocr_lCKp.js";import"./ModalBody-CY91l2Bs.js";import"./ButtonIcon-DdgcgrDi.js";import"./ButtonLabel-CfdqJJd8.js";import"./AccountOrganization-BgrVOQu1.js";import"./Byline-BRLzGNKv.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
