import{j as t}from"./iframe-BDpWuaMs.js";import{S as o}from"./Handshake-B8rtuIAM.js";import{S as e}from"./Bell-BbI9Ivyq.js";import{S as s}from"./Hashtag-BsMN_jMN.js";import{S as n}from"./Files-C9tuwDdw.js";import{A as p}from"./AccountListItem-CqXVdJ9O.js";import{L as m}from"./List-BnWl-S7K.js";import{A as l}from"./AccountListItemDetails-VKP27eG9.js";import{B as c}from"./Button-m_FXpHGO.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-BKmV9YxM.js";import"./ListItem-mkIEbDJT.js";import"./index-DVPUayQ0.js";import"./Input-BoCHA0_0.js";import"./tooltip-DLcd2lCg.js";import"./XMark-Cx5Omj8e.js";import"./Icon-4_NTN6mD.js";import"./Skeleton-DC_TZb2p.js";import"./Avatar-CT8r-oMP.js";import"./AvatarGroup-C5RQzawa.js";import"./Badge-DPODtVho.js";import"./Tooltip-X0E0nlNG.js";import"./Heading-D4nA4ZwT.js";import"./useHighlightedText-B13W4IFy.js";import"./ChevronUp-CUbZcbs3.js";import"./ChevronDown-Bc_cVxBY.js";import"./ChevronRight-BJTZ2o3o.js";import"./HeartFill-DH1096LK.js";import"./ContextMenu-CzieQggW.js";import"./useDropdownMenuController-P2ixjEDe.js";import"./Dropdown-COTBq4xu.js";import"./MenuElipsisHorizontal-_yoYMfaf.js";import"./SearchField-D16JUOzv.js";import"./MagnifyingGlass-ItUM1KfV.js";import"./FieldBase-CGSHeWph.js";import"./Typography-DZRyPYmV.js";import"./Label-7jR2lGh9.js";import"./MenuListItem-Cx4K7HTt.js";import"./MenuListHeading-XsWTeeVe.js";import"./MenuItem-BH8ygUTz.js";import"./ItemMedia-CHwsaJTx.js";import"./Checkmark-DDYvLrrH.js";import"./ItemControls-BtUdj5a9.js";import"./useMenu-CniiHJSE.js";import"./index-BHwG3h0W.js";import"./InformationSquare-CS8D_BUZ.js";import"./Flex-zEgiMRQg.js";import"./Section-B9Daowr7.js";import"./ButtonGroup-DdOFFFWL.js";import"./Divider-CH8zwguZ.js";import"./SettingsItem-DgmMIren.js";import"./SettingsItemBase-C3p6p24I.js";import"./ItemLink-CfhFFB25.js";import"./SettingsModal-Bm7XFvqp.js";import"./ModalBody-B45xukPd.js";import"./ButtonIcon-BKilWA_u.js";import"./ButtonLabel-BQStCFIw.js";import"./AccountOrganization-MwiRZOh9.js";import"./Byline-BE77fsAg.js";const xt={title:"Account/AccountListItem",component:p,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[a=>t.jsx(m,{children:t.jsx(a,{})})]},r={args:{collapsible:!0}},i={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(l,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:o,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:e,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:e,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:s,as:"button",onClick:()=>alert("Org nr. ble kopiert"),controls:t.jsxs(c,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(n,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
