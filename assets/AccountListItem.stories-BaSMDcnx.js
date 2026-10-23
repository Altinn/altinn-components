var n=Object.defineProperty;var a=(e,s)=>n(e,"name",{value:s,configurable:!0});import{a7 as t,c as p}from"./iframe-Ck42qOx1.js";import{S as l}from"./Handshake-BHSz_8ZU.js";import{S as o}from"./Bell-C9thxVLV.js";import{S as m}from"./Hashtag-B7SkRsCh.js";import{S as c}from"./Files-B3cMo_EB.js";import{A as g}from"./AccountListItem-BejVmeJd.js";import{A as d}from"./AccountListItemDetails-OXErsjLN.js";import{L as u}from"./List-Cq42YOlE.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-DshHRfE3.js";import"./Input-DGLuCKOz.js";import"./Avatar-BGxIkqoE.js";import"./AvatarGroup-47nQolqa.js";import"./Badge-Cjd2AmoZ.js";import"./Tooltip-CTYi4ppJ.js";import"./Heading-CWc2O27X.js";import"./useHighlightedText-BgClQYDl.js";import"./ChevronUp-CXZFvpJO.js";import"./ChevronDown-CVgB8S_A.js";import"./ChevronRight-DWZnEevf.js";import"./HeartFill-DWHY2qOR.js";import"./ContextMenu-B0efyfFm.js";import"./useDropdownMenuController-BwkDFTz9.js";import"./Dropdown-Dfag5WSr.js";import"./SearchField-B8KiDBUc.js";import"./MagnifyingGlass-CxCtlPHN.js";import"./MenuListItem-BIqpRdYe.js";import"./MenuListHeading-C_C2TzXD.js";import"./MenuItem-BT6sfN7d.js";import"./ItemMedia-Br8-csYo.js";import"./Checkmark-Di95vAnU.js";import"./ItemLabel-BKKQ8yMh.js";import"./ItemControls-3hwzA3sg.js";import"./FieldBase-ly-5mtcw.js";import"./Typography-nObbjg0R.js";import"./Field-DflaqZhu.js";import"./Label-BQ9ZPq2G.js";import"./useMenu-BBAeNj9K.js";import"./MenuListDivider-CthpKcql.js";import"./InformationSquare-CGuPpOub.js";import"./MenuElipsisHorizontal-BhzA5KpZ.js";import"./Section-wNwpgjpU.js";import"./Flex-CzBhjOdV.js";import"./ButtonGroup-ChpwNZu9.js";import"./Divider-CNMs3h7U.js";import"./SettingsItem-CKUU-yVH.js";import"./SettingsItemBase-BOQ-SQ7r.js";import"./ItemBase-CjTMF0wf.js";import"./ItemLink-D_slDvwR.js";import"./SettingsModal-DgcCT0IL.js";import"./ModalBody-0O6NY7SM.js";import"./ButtonIcon-CYrEachb.js";import"./ButtonLabel-5wbsHXmv.js";import"./AccountOrganization-BfG-SRA5.js";import"./Byline-DtMU233V.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[e=>t.jsx(u,{children:t.jsx(e,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:o,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:o,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:a(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
