var s=Object.defineProperty;var e=(i,o)=>s(i,"name",{value:o,configurable:!0});import{a6 as t,c as p}from"./iframe-CjTVLX0J.js";import{S as l}from"./Handshake-tU54QgYn.js";import{S as a}from"./Bell-BL9bPd5p.js";import{S as m}from"./Hashtag-Crlce2yW.js";import{S as c}from"./Files-DDPtxbK-.js";import{A as g}from"./AccountListItem-CfRtoDyF.js";import{A as d}from"./AccountListItemDetails-DY4DHOXZ.js";import{L as u}from"./List-D_f5-yc3.js";import"./preload-helper-Cc2_yIPf.js";import"./ListItem-BsQLulwX.js";import"./Input-B0rqselK.js";import"./Avatar-Bte94cY6.js";import"./AvatarGroup-C543ATGD.js";import"./Badge-5qYmbB4A.js";import"./Tooltip-D-ZO89_f.js";import"./Heading-iGdZKzrq.js";import"./useHighlightedText-DSpkTug-.js";import"./ChevronUp-BaW30cb9.js";import"./ChevronDown-mX34rd4T.js";import"./ChevronRight-B7WfXeCo.js";import"./HeartFill-Duwqd6aq.js";import"./ContextMenu-txLONgGE.js";import"./useDropdownMenuController-D0Z68xmE.js";import"./Dropdown-Dh6j_cOd.js";import"./SearchField-BoWCGyO9.js";import"./MagnifyingGlass-DkbBbRdW.js";import"./MenuListItem-Db90m9cT.js";import"./MenuListDivider-D1F-iYgs.js";import"./MenuItem-BHJaEqQ5.js";import"./CheckboxUncheckedIcon-BI8H0dji.js";import"./RadioUncheckedIcon-BkjXdcpz.js";import"./ItemMedia-DnpNAz5S.js";import"./ItemLabel-QKtbke7Z.js";import"./ItemControls-DdDcRIJg.js";import"./FieldBase-C5zYRo5L.js";import"./Typography-D5LJyQSI.js";import"./Field-DCjNXD15.js";import"./Label-em-S6i9n.js";import"./useMenu-DyQl0UH7.js";import"./InformationSquare-DA1l9Dlv.js";import"./Section-Srp_Bqeg.js";import"./Flex-DPGhARfx.js";import"./ButtonGroup-CI4WR3eO.js";import"./Divider-BNWONtts.js";import"./SettingsItem-C-B-6W83.js";import"./SettingsItemBase-B1Ukcnj2.js";import"./ItemBase-DigRLYQR.js";import"./ItemLink-Dxgw-kvc.js";import"./SettingsModal-Bh9cutIH.js";import"./ModalBody-Bv7CSic6.js";import"./ButtonIcon-DqZCck6e.js";import"./ButtonLabel-Bj2vcKLA.js";import"./AccountOrganization-BOwMbFwN.js";import"./Byline-DCQwseqO.js";const xt={title:"Account/AccountListItem",component:g,tags:["autodocs"],parameters:{},args:{icon:{type:"company",name:"Diaspora Bergensis"},title:"Diaspora Bergensis",description:"Org nr. 928914038"},decorators:[i=>t.jsx(u,{children:t.jsx(i,{})})]},r={args:{collapsible:!0}},n={args:{collapsible:!0,expanded:!0,interactive:!1,children:t.jsx(d,{settings:[{id:"1",title:"Rolle og tilganger",value:"Daglig leder",badge:{label:"4 tilganger"},icon:l,linkIcon:!0},{id:"2",title:"Varslinger på SMS",icon:a,badge:{variant:"text",label:"Legg til"},variant:"modal",linkIcon:!0},{id:"2",title:"Varslinger på e-post",value:"mathias@gmail.com",icon:a,badge:{variant:"text",label:"Endre"},variant:"modal",linkIcon:!0},{id:"3",title:"Organisasjonsnummer",value:"XXX XXX XXX",icon:m,as:"button",onClick:e(()=>alert("Org nr. ble kopiert"),"onClick"),controls:t.jsxs(p,{as:"div",size:"xs",variant:"ghost",children:[t.jsx(c,{}),t.jsx("span",{children:"Kopier org. nr"})]})}],organization:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis"},selected:!0,items:[{title:"Diaspora Bergensis",description:"Org nr. 928914038",avatar:{type:"company",name:"Diaspora Bergensis",variant:"outline"}}]}]})}},bt=["Default","Expanded"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
