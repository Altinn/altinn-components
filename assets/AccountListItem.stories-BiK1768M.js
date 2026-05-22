import{j as t}from"./iframe-D-ID03Ik.js";import{S as o}from"./Handshake-oBZ8bPVn.js";import{S as e}from"./Bell-SIMNiyew.js";import{S as s}from"./Hashtag-CCSRi-8-.js";import{S as n}from"./Files-Cq94B7HH.js";import{A as p}from"./AccountListItem-CqX-ScC7.js";import{L as m}from"./List-C-la8QZt.js";import{A as l}from"./AccountListItemDetails-Z0tY2pTr.js";import{B as c}from"./Button-CO1zFGa4.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-DxZoCrQU.js";import"./ListItem-x7s3DQfA.js";import"./index-DpFyEq-2.js";import"./Input-BflTpPuJ.js";import"./tooltip-CH7-mov_.js";import"./XMark-DAr8sgUQ.js";import"./Icon-CER3YkDn.js";import"./Skeleton--3bwKnDN.js";import"./Avatar-CUF81_T9.js";import"./AvatarGroup-ZBmyex5T.js";import"./Badge-BH60Kfyy.js";import"./Tooltip-DuVvkEGb.js";import"./Heading-BD0s_Obx.js";import"./useHighlightedText-Db1ksA0v.js";import"./ChevronUp-BM7sC8IQ.js";import"./ChevronDown-_u2ch-6C.js";import"./ChevronRight-CxM-6AgC.js";import"./HeartFill-CdZwyDhR.js";import"./ContextMenu-CNtum_0S.js";import"./useDropdownMenuController-CvvhEQZ7.js";import"./Dropdown-CPTBx2eu.js";import"./MenuElipsisHorizontal-aZjOJxtA.js";import"./SearchField-D--HBqax.js";import"./MagnifyingGlass-DWkFIUI5.js";import"./FieldBase-DmpPz6xV.js";import"./Typography-COzCTzPW.js";import"./Label-DsF9mxAr.js";import"./MenuListItem-Ba7wKRG_.js";import"./MenuListHeading-D9YSE4Po.js";import"./MenuItem-Czug_8v9.js";import"./ItemMedia-BTzF80jS.js";import"./Checkmark-WbwQiDGB.js";import"./ItemControls-Bpd8WrWV.js";import"./useMenu-OLkOIIh8.js";import"./index-B-QoLJUi.js";import"./InformationSquare-BLDef__3.js";import"./Flex-pOoXofWS.js";import"./Section-Df_v2ciX.js";import"./ButtonGroup-vd8KP0y5.js";import"./Divider-CMEwMA07.js";import"./SettingsItem-BayFQnvs.js";import"./SettingsItemBase-RyTWVWwB.js";import"./ItemLink-CKC9Zcw7.js";import"./SettingsModal-Be5AEnKf.js";import"./ModalBody-CNB4VnH4.js";import"./ButtonIcon-BTj5a5hg.js";import"./ButtonLabel-D9Z2FXBW.js";import"./AccountOrganization-CvUcjsT9.js";import"./Byline-Di2Y9oZr.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
