import{a7 as t,c as o}from"./iframe-Bjjt_sJ1.js";import{S as s}from"./Handshake-BR_H8bKA.js";import{S as e}from"./Bell-LS1IZaOH.js";import{S as n}from"./Hashtag-CC-VFqAj.js";import{S as p}from"./Files-BFp85XKT.js";import{A as l}from"./AccountListItem-BG6JsM-l.js";import{A as m}from"./AccountListItemDetails-BaUeGEe_.js";import{L as c}from"./List-DIqwgyys.js";import"./preload-helper-PPVm8Dsz.js";import"./ListItem-C0qHzDdu.js";import"./Input-PLxdr44a.js";import"./Avatar-DUGxJuve.js";import"./AvatarGroup-Bt2kizFo.js";import"./Badge-Dlcy0_mS.js";import"./Tooltip-CYcMXzzg.js";import"./Heading-BHJvhrmD.js";import"./useHighlightedText-BPKtv5Uu.js";import"./ChevronUp-C-n4hHxG.js";import"./ChevronDown-C4cxiit8.js";import"./ChevronRight-MBNaUHNp.js";import"./HeartFill-DKWnZQDN.js";import"./ContextMenu-BqCCj7wW.js";import"./useDropdownMenuController-zn5n7TQt.js";import"./Dropdown-CeLlk6Ua.js";import"./SearchField-CN96vdWl.js";import"./MagnifyingGlass-B6DdP_wu.js";import"./FieldBase-xSixxw66.js";import"./Typography-D6uVUzG3.js";import"./Field-Cv6yJUU5.js";import"./Label-DSP8_VuM.js";import"./useMenu-CfDnO3tS.js";import"./MenuListItem-CebbbonR.js";import"./MenuListDivider-CP2Z2JTV.js";import"./MenuListHeading-NxhgYwSy.js";import"./MenuItem-Cqr4SOJp.js";import"./ItemMedia-cRp9TeR0.js";import"./Checkmark-BJpweToD.js";import"./ItemLabel-C7-OFrDm.js";import"./ItemControls-Cf0gBB0S.js";import"./InformationSquare-BBRKQU3y.js";import"./MenuElipsisHorizontal-288HpaRD.js";import"./Section-DbOZVIjc.js";import"./Flex-GHRWEM3Q.js";import"./ButtonGroup-uHmrofaO.js";import"./Divider-DzalYy47.js";import"./SettingsItem-CIVB-TmU.js";import"./SettingsItemBase-0ckim70l.js";import"./ItemBase-DDpnq5qx.js";import"./ItemLink-BbRKplZ0.js";import"./SettingsModal-dzs029Zb.js";import"./ModalBody-5UKBpkiI.js";import"./ButtonIcon-CkyJNeMs.js";import"./ButtonLabel-BfWuYCD9.js";import"./AccountOrganization-CTjFixGZ.js";import"./Byline-BHcnyvRN.js";const dt={title:"Account/AccountListItem",component:l,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(c,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(m,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:s,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:n,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(o,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(p,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
